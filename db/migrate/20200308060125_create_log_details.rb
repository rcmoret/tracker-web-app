# frozen_string_literal: true

class CreateLogDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :log_details do |t|
      t.references :log_entry, foreign_key: true, null: false
      t.references :unit, foreign_key: true, null: false
      t.float :rating, foreign_key: true, null: false
    end
  end
end
