# frozen_string_literal: true

module Types
  class MedicationEvent < BaseType
    field :id, ID, null: false
    field :event_time, GraphQL::Types::ISO8601DateTime, 'time for the event', null: false
    field :details, [MedicationEventDetail], 'details for the event', null: false
  end
end
