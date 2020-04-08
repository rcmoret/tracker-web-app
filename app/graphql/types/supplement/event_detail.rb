# frozen_string_literal: true

module Types
  class SupplementEventDetail < BaseType
    field :id, ID, null: false
    field :quantity, Integer, 'quantity', null: false
    field :type, SupplementType, 'type of supplement', null: false
  end
end
