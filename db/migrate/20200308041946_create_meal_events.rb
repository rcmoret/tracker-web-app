class CreateMealEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_events do |t|
      t.datetime :event_time, null: false
    end
  end
end
