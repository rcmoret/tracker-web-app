# frozen_string_literal: true

module Log
  module API
    class DetailTypes < Sinatra::Base
      include APIHelper::Collection
      include APIHelper::NewObject
      include APIHelper::Params
      register Sinatra::Namespace
      before { content_type 'application/json' }

      private

      def model
        DetailType
      end
      alias form model
    end
  end
end
