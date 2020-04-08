# frozen_string_literal: true

class CreateSupplementTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :supplement_types do |t|
      t.string :name, null: false
      t.references :unit, foreign_key: true, null: false
    end

    add_index :supplement_types, :name, unique: true
  end
end
