# frozen_string_literal: true

module API
  module Helper
    def request_params
      @request_params ||= params.merge(request_body)
    end

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
