# frozen_string_literal: true

module API
  class Supplement < Sinatra::Base
    include Helper
    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if supplement.save
        json supplement.presentable
      else
        json supplement.errors, status: 422
      end
    end

    private

    def model
      ::Supplement::Type
    end

    def all
      model.all.map(&:presentable)
    end

    def supplement
      @supplement ||= model.new(supplement_params)
    end

    def supplement_params
      request_params.slice(*model::PUBLIC_ATTRS)
    end
  end
end
