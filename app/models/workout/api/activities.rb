# frozen_string_literal: true

module Workout
  module API
    class Activities < Sinatra::Base
      include APIHelper::Collection
      include APIHelper::NewObject
      include APIHelper::Params
      before { content_type 'application/json' }

      private

      def model
        Activity
      end
      alias form model
    end
  end
end
