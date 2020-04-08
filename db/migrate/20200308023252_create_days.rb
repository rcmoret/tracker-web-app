# frozen_string_literal: true

class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.integer :day, null: false, limit: 31
      t.integer :month, null: false, limit: 12
      t.integer :year, null: false
    end
  end
end
