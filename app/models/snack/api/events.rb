# frozen_string_literal: true

module Snack
  module API
    class Events < Sinatra::Base
      register Sinatra::Namespace
      include APIHelper::Collection
      include APIHelper::DeletableObject
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
