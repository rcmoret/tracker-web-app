# frozen_string_literal: true

class CreateVictualItems < ActiveRecord::Migration[5.2]
  def change
    create_table :victual_items do |t|
      t.string :name, null: false
      t.references :victual_type, null: false, foreign_key: true
    end

    add_index :victual_items, :name, unique: true
  end
end
