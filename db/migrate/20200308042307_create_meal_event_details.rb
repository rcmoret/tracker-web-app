# frozen_string_literal: true

class CreateMealEventDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_event_details do |t|
      t.references :meal_event, null: false, foreign_key: true
      t.integer :quantity, null: false
      t.references :victual_item, null: false, foreign_key: true
    end
  end
end
