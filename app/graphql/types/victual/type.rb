# frozen_string_literal: true

module Types
  class VictualType < BaseType
    field :id, ID, null: false
    field :name, String, 'name of the food or drink type', null: false
  end
end
