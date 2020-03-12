# frozen_string_literal: true

module API
  class Unit < Sinatra::Base
    include Helper
    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if unit.save
        json unit.attributes
      else
        json unit.errors, status: 422
      end
    end

    private

    def model
      ::Unit
    end

    def all
      model.all
    end

    def unit
      @unit ||= model.new(unit_params)
    end

    def unit_params
      request_params.slice(*model::PUBLIC_ATTRS)
    end
  end
end
