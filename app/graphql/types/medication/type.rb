# frozen_string_literal: true

module Types
  class MedicationType < BaseType
    field :id, ID, null: false
    field :name, String, 'name of the medication', null: false
    field :unit_id, Integer, 'Id of the unit for the medication', null: false
    field :unit, [Unit], 'Unit of messure', null: false
  end
end
