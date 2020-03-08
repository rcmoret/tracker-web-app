# frozen_string_literal: true

module Meal
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
  end
end
