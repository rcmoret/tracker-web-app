# frozen_string_literal: true

module Workout
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
  end
end
