# frozen_string_literal: true

module Types
  class MealDetail < BaseType
    field :unit, [Unit], null: false
    field :quantity, Float, null: false
    field :victual_item, VictualItem, null: false
  end
end
