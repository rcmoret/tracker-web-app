# frozen_string_literal: true

module Medication
  module API
    class Events < Sinatra::Base
      include APIHelper::Collection
      include APIHelper::Details
      include APIHelper::NewObject
      include APIHelper::Object
      include APIHelper::Params
      register Sinatra::Namespace
      before { content_type 'application/json' }

      namespace ID_REGEXP do
        post '/detail' do
          if not_found?
            render_not_found(model, id)
          elsif new_detail.save
            json new_detail.presentable
          else
            json new_detail.errors, status: 422
          end
        end

        delete '' do
          if not_found?
            render_not_found(model, id)
          elsif supplement_event.destroy
            json {}
          else
            json({ 'errors' => 'cannot delete events with details present' }, status: 422)
          end
        end

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

      alias supplement_event object

      def new_detail
        @new_detail ||= supplement_event
                        .details
                        .build(event_detail_params(detail_klass))
      end

      def detail
        @detail ||= supplement_event.details.find(request_params['detail_id'])
      end
    end
  end
end
