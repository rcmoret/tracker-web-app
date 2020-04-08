# frozen_string_literal: true

module Types
  module Workout
    class Activity < BaseType
      field :id, ID, null: false
      field :name, String, 'name or description of the activity', null: false
    end
  end
end
