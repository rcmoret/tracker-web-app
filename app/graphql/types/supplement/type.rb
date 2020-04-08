# frozen_string_literal: true

module Types
  class SupplementType < BaseType
    field :id, ID, null: false
    field :name, String, 'name of the supplement', null: false
    field :unit_id, Integer, 'Id of the unit for the supplement', null: false
    field :unit, [Unit], 'Unit of messure', null: false
  end
end
