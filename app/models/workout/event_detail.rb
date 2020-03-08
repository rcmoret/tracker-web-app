# frozen_string_literal: true

module Workout
  class EventDetail < ActiveRecord::Base
    belongs_to :event, foreign_key: :workout_event_id
    belongs_to :activity, foreign_key: :workout_activity_id
  end
end
