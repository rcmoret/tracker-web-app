# frozen_string_literal: true

# rubocop:disable Metrics/AbcSize
# rubocop:disable Metrics/BlockLength
# rubocop:disable Metrics/MethodLength
module APIHelper
  ID_REGEXP = %r{/(?<id>\d+)}.freeze

  module Collection
    def self.included(base)
      base.class_eval do
        get '/' do
          json all
        end
      end
    end

    def all
      @all ||= model.all.map(&:presentable)
    end
  end

  module DeletableDetail
    include Object

    def self.included(base)
      base.class_eval do
        namespace ID_REGEXP do
          delete %r{/detail/(?<detail_id>\d+)} do
            detail.destroy
            json {}
          end
        end
      end
    end

    private

    def detail
      @detail ||= object.details.find(request_params['detail_id'])
    end
  end

  module DeletableObject
    include Object

    def self.included(base)
      base.class_eval do
        namespace ID_REGEXP do
          delete '' do
            if not_found?
              render_not_found(model, id)
            elsif object.destroy
              json {}
            else
              json({ 'errors' => 'cannot delete record with dependents' }, status: 422)
            end
          end
        end
      end
    end
  end

  module NewDetail
    include Object

    def self.included(base)
      base.class_eval do
        namespace ID_REGEXP do
          post '/detail' do
            if not_found?
              render_not_found(model, id)
            elsif new_detail.save
              json new_detail.presentable
            else
              json new_detail.errors, status: 422
            end
          end
        end
      end
    end

    private

    def new_detail
      @new_detail ||= object.details.build(event_detail_params)
    end

    def event_detail_params
      @event_detail_params ||= request_params.slice(*detail_klass::PUBLIC_ATTRS)
    end
  end

  module NewObject
    def self.included(base)
      base.class_eval do
        post '/' do
          if new_object.save
            json new_object.presentable
          else
            json new_object.errors, status: 422
          end
        end
      end
    end

    def new_object
      @new_object ||= form.new(form_params)
    end

    private

    def form_params
      @form_params ||= request_params.slice(*model::PUBLIC_ATTRS)
    end
  end

  module Object
    def id
      @id ||= request_params['id']
    end

    def not_found?
      @not_found ||= !model.exists?(id: id)
    end

    private

    def object
      @object ||= model.find(id)
    end
  end

  module Params
    def request_params
      @request_params ||= params.merge(request_body)
    end

    def render_not_found(model, id)
      json({ 'error' => "#{model} not found with id: #{id}" }, status: 404)
    end

    private

    def request_body
      @request_body ||= parse(request.body.read)
    end

    def parse(body)
      case request.content_type
      when 'application/json'
        JSON.parse(body)
      when 'application/x-www-form-urlencoded'
        Rack::Utils.parse_query(body)
      else
        {}
      end
    rescue StandardError
      {}
    end
  end
end
# rubocop:enable Metrics/MethodLength
# rubocop:enable Metrics/BlockLength
# rubocop:enable Metrics/AbcSize
