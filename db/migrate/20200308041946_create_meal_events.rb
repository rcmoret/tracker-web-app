class CreateMealEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_events do |t|
      t.datetime :event_time, null: false
      t.references :meal_type, null: false, foreign_key: true
    end
  end
end
