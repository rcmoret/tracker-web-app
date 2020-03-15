# frozen_string_literal: true

module Workout
  def self.table_name_prefix
    :workout_
  end
end

require './app/models/workout/event'
require './app/models/workout/activity'
require './app/models/workout/event_detail'
require './app/models/workout/api/activities'
