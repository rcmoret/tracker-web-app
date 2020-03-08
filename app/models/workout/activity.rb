# frozen_string_literal: true

module Workout
  class Activity < ActiveRecord::Base
    validates :name, presence: true, uniqueness: true
  end
end
