# frozen_string_literal: true

module Log
  module API
    class Entries < Sinatra::Base
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
        Entry
      end

      def form
        model.form
      end

      def detail_klass
        EntryDetail
      end
    end
  end
end
