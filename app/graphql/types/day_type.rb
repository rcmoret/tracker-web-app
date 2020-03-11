# frozen_string_literal: true

module Types
  class DayType < BaseType
    field :id, ID, null: false
    field :tags, [String], null: false
  end
end
