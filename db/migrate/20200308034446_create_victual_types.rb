# frozen_string_literal: true

class CreateVictualTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :victual_types do |t|
      t.string :name, null: false
    end

    add_index :victual_types, :name, unique: true
  end
end
