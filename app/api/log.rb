# frozen_string_literal: true

module API
  class Log < Sinatra::Base
    include APIHelper
    before { content_type 'application/json' }

    get '/' do
      json all
    end

    post '/' do
      if log.save
        json log.presentable
      else
        json log.errors, status: 422
      end
    end

    private

    def model
      ::Log::Type
    end

    def all
      model.all.map(&:presentable)
    end

    def log
      @log ||= model.new(log_params)
    end

    def log_params
      default_params
        .merge(request_params)
        .slice(*model::PUBLIC_ATTRS)
    end
  end
end
