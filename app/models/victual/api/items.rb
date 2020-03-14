# frozen_string_literal: true

module Supplement
  module API
    class Events < Sinatra::Base
      include APIHelper::Collection
      include APIHelper::NewObject
      include APIHelper::Params
      before { content_type 'application/json' }

      private

      def model
        Event
      end
      alias form model
    end
  end
end
