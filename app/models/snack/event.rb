# frozen_string_literal: true

require './app/models/snack/event_presenter'

module Snack
  class Event < ActiveRecord::Base
    include Presentable
    include Shared::Scopes::For
    self.table_name = :snack_events
    belongs_to :victual_item, class_name: 'Victual::Item'
    belongs_to :unit
    alias_attribute :item_id, :victual_item_id

    PUBLIC_ATTRS = %w[
      event_time
      item_id
      quantity
      unit_id
    ].freeze

    private

    def presenter_klass
      EventPresenter
    end
  end
end
