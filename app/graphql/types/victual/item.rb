# frozen_string_literal: true

module Types
  module Victual
    class Item < BaseType
      field :id, ID, null: false
      field :name, String, 'name of the food or drink item', null: false
      field :type_id, Integer, 'Id of the food or beverage type', null: false
      field :type, VictualType, 'type of food or beverage', null: false
    end
  end
end
