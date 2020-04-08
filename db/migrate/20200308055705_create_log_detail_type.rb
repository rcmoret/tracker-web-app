# frozen_string_literal: true

class CreateLogDetailType < ActiveRecord::Migration[5.2]
  def change
    create_table :log_detail_types do |t|
      t.string :description, null: false
    end

    add_index :log_detail_types, :description, unique: true
  end
end
