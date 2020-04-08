# frozen_string_literal: true

module API
  class Unit < Sinatra::Base
    include APIHelper::Collection
    include APIHelper::NewObject
    before { content_type 'application/json' }

    def model
      ::Unit
    end
    alias form model
  end
end
