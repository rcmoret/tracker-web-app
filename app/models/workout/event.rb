# frozen_string_literal: true

module Workout
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :workout_event_id
  end
end
