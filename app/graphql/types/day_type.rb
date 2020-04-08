# frozen_string_literal: true

module Types
  class DayType < BaseType
    field :id, ID, null: false
    field :tags, [String], 'Notes about a given day', null: false
    field :medication_events, [MedicationEvent], 'Information about medication events for the day', null: false
  end
end
