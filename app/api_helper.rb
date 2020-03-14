# frozen_string_literal: true

module APIHelper
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

  module Details
    def event_detail_params(model)
      @event_detail_params ||= request_params.slice(*model::PUBLIC_ATTRS)
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
    ID_REGEXP = %r{/(?<id>\d+)}.freeze

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
