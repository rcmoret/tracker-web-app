# frozen_string_literal: true

module API
  class Meal < Sinatra::Base
    include APIHelper
    register Sinatra::Namespace

    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if form.save
        json form.presentable
      else
        json form.errors, status: 422
      end
    end

    namespace %r{/(?<id>\d+)} do
      post '/detail' do
        if detail.save
          json detail.presentable
        else
          json form.errors, status: 422
        end
      end

      delete %r{/detail/(?<detail_id>\d+)} do
        detail.destroy
        json {}
      end

      delete '' do
        if meal_event.destroy
          json {}
        else
          json({ 'errors' => 'cannot delete events with details present' }, status: 422)
        end
      end
    end

    private

    def model
      ::Meal::Event
    end

    def all
      @all ||= model.all.map(&:presentable)
    end

    def meal_event
      @meal_event ||= model.find(request_params['id'])
    end

    def detail
      @detail ||= meal_event.details.build(detail_params)
    end

    def form
      @form ||= ::Meal::Form.new(meal_params)
    end

    def meal_params
      @meal_params ||= request_params.slice(*model::PUBLIC_ATTRS)
    end

    def event_detail
      @event_detail = meal_event.details.find(request_params['detail_id'])
    end

    def detail_params
      @detail_params ||= request_params.slice(*::Meal::EventDetail::PUBLIC_ATTRS)
    end
  end
end
