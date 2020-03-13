# frozen_string_literal: true

module API
  class Snack < Sinatra::Base
    include Helper
    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if snack.save
        json snack.presentable
      else
        json snack.errors, status: 422
      end
    end

    private

    def model
      ::Snack::Event
    end

    def all
      model.all.map(&:presentable)
    end

    def snack
      @snack ||= model.new(snack_params)
    end

    def snack_params
      default_params
        .merge(request_params)
        .slice(*model::PUBLIC_ATTRS)
    end

    def default_params
      {
        'event_time' => Time.current,
      }
    end
  end
end
