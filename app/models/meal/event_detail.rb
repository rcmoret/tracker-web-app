# frozen_string_literal: true

module Meal
  class EventDetail < ActiveRecord::Base
    include Presentable
    belongs_to :event, foreign_key: :meal_event_id
    belongs_to :victual_item, class_name: 'Victual::Item'
    belongs_to :unit
    alias_attribute :event_id, :meal_event_id
    alias_attribute :item_id, :victual_item_id

    PUBLIC_ATTRS = %w[
      event_id
      item_id
      quantity
      unit_id
    ].freeze

    private

    def presenter_klass
      EventDetailPresenter
    end
  end
end
