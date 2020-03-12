# frozen_string_literal: true

module API
  class VictualItem < Sinatra::Base
    include Helper
    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if victual_item.save
        json victual_item.attributes
      else
        json victual_item.errors, status: 422
      end
    end

    private

    def model
      Victual::Item
    end

    def all
      model
        .all
        .map(&:presentable)
        .map(&:attributes)
    end

    def victual_item
      @victual_item ||= model.new(victual_item_params)
    end

    def victual_item_params
      request_params.slice(*model::PUBLIC_ATTRS)
    end
  end
end
