# frozen_string_literal: true

module Service
  class Graphiql < Sinatra::Base
    # html
    get %r{/(?<filename>\w+\.html)} do
      File.read("./public/graphiql/#{filename}")
    end

    # js
    get %r{/(?<filename>\w+(\.min)?\.js)} do
      content_type 'text/javascript'
      File.read("./public/graphiql/#{filename}")
    end

    # css
    get %r{/(?<filename>\w+\.css)} do
      content_type 'text/css'
      File.read("./public/graphiql/#{filename}")
    end

    private

    def filename
      params['filename']
    end
  end
end
