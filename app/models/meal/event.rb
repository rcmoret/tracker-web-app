# frozen_string_literal: true

module Meal
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :meal_event_id
  end
end
