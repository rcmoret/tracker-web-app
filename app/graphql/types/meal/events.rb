# frozen_string_literal: true

module Types
  class MealEvent < BaseType
    field :id, ID, null: false
    field :event_time, GraphQL::Types::ISO8601DateTime, null: false
    field :details, [MealDetail], null: false
  end
end
