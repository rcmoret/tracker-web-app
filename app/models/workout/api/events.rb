# frozen_string_literal: true

module Workout
  module API
    class Events < Sinatra::Base
      include APIHelper::Collection
      include APIHelper::DeletableObject
      include APIHelper::DeletableDetail
      include APIHelper::NewDetail
      include APIHelper::NewObject
      include APIHelper::Params
      register Sinatra::Namespace
      before { content_type 'application/json' }

      private

      def model
        Event
      end

      def form
        model.form
      end

      def detail_klass
        EventDetail
      end
    end
  end
end
