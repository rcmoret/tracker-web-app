# frozen_string_literal: true

module Log
  module API
    class Entries < Sinatra::Base
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
          elsif log_entry.destroy
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
        Entry
      end

      def form
        model.form
      end

      def detail_klass
        EntryDetail
      end

      alias log_entry object

      def new_detail
        @new_detail ||= log_entry
                        .details
                        .build(event_detail_params(detail_klass))
      end

      def detail
        @detail ||= log_entry.details.find(request_params['detail_id'])
      end
    end
  end
end
