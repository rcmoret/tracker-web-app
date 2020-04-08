# frozen_string_literal: true

module Types
  class SupplementEvent < BaseType
    field :id, ID, null: false
    field :event_time, GraphQL::Types::ISO8601DateTime, 'time for the event', null: false
    field :details, [SupplementEventDetail], 'details for the event', null: false
  end
end
