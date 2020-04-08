# frozen_string_literal: true

module Types
  class MedicationEventDetail < BaseType
    field :id, ID, null: false
    field :quantity, Integer, 'quantity', null: false
    field :type, MedicationType, 'type of medication', null: false
  end
end
