# frozen_string_literal: true

class CreateLogDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :log_details do |t|
      t.references :log_entry, foreign_key: true, null: false
      t.references :log_detail_type, foreign_key: true, null: false
      t.string :rating
    end
  end
end
