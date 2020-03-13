# frozen_string_literal: true

module API
  class Meal < Sinatra::Base
    include Helper
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

    post %r{/(?<id>\d+)/detail} do
      if detail.save
        json detail.presentable
      else
        json form.errors, status: 422
      end
    end

    private

    def model
      ::Meal::Event
    end

    def all
      model.all.map(&:presentable)
    end

    def meal_event
      @meal_event ||= model.find(request_params['id'])
    end

    def detail
      meal_event.details.build(detail_params)
    end

    def form
      @form ||= ::Meal::Form.new(meal_params)
    end

    def meal_params
      request_params.slice(*model::PUBLIC_ATTRS)
    end

    def detail_params
      request_params.slice(*::Meal::EventDetail::PUBLIC_ATTRS)
    end
  end
end
