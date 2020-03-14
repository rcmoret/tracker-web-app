# frozen_string_literal: true

module API
  class Medication < Sinatra::Base
    include APIHelper
    before { content_type 'application/json' }

    get '/types' do
      json all_types
    end

    get '/' do
      json all
    end

    post '/' do
      if medication.save
        json medication.presentable
      else
        json medication.errors, status: 422
      end
    end

    private

    def type_model
      ::Medication::Type
    end

    def all_types
      @all_types ||= type_model.all.map(&:presentable)
    end

    def medication
      @medication ||= type_model.new(medication_type_params)
    end

    def medication_type_params
      request_params.slice(*type_model::PUBLIC_ATTRS)
    end
  end
end
