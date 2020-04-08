# frozen_string_literal: true

module API
  class Graphql < Sinatra::Base
    before { content_type 'application/json' }

    post '/' do
      result = Schema.execute(query)
      json result.to_h
    end

    private

    def payload
      @payload ||= request.body.read
    end

    def query
      JSON.parse(payload)['query']
    end
  end
end
