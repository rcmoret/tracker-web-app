# frozen_string_literal: true

module Snack
  module API
    class Events < Sinatra::Base
      before { content_type 'application/json' }
      include APIHelper::Collection
      include APIHelper::NewObject
      include APIHelper::Params

      private

      def model
        Event
      end
      alias form model
    end
  end
end
