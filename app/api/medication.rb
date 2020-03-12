# frozen_string_literal: true

module API
  class Medication < Sinatra::Base
    include Helper
    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if medication.save
        json medication.presentable.attributes
      else
        json medication.errors, status: 422
      end
    end

    private

    def model
      ::Medication::Type
    end

    def all
      model
        .all
        .map(&:presentable)
        .map(&:attributes)
    end

    def medication
      @medication ||= model.new(medication_params)
    end

    def medication_params
      request_params.slice(*model::PUBLIC_ATTRS)
    end
  end
end
