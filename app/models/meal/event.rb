# frozen_string_literal: true

module Meal
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :meal_event_id
    belongs_to :type, foreign_key: :meal_type_id
    alias_attribute :type_id, :meal_type_id
  end
end
