# frozen_string_literal: true

module Meal
  class EventDetail < ActiveRecord::Base
    belongs_to :event, foreign_key: :meal_event_id
    belongs_to :victual_item
    belongs_to :unit
  end
end
