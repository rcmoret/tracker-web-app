# frozen_string_literal: true

module Medication
  module API
    class Events < Sinatra::Base
      include APIHelper::Collection
      include APIHelper::DeletableObject
      include APIHelper::NewDetail
      include APIHelper::NewObject
      include APIHelper::Params
      register Sinatra::Namespace
      before { content_type 'application/json' }

      namespace ID_REGEXP do
        delete %r{/detail/(?<detail_id>\d+)} do
          detail.destroy
          json {}
        end
      end

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

      def detail
        @detail ||= object.details.find(request_params['detail_id'])
      end
    end
  end
end
