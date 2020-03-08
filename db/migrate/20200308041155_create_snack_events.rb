# frozen_string_literal: true

class CreateSnackEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :snack_events do |t|
      t.datetime :event_time, null: false
      t.integer :quantity, null: false
      t.references :victual_item, foreign_key: true, null: false
    end
  end
end
