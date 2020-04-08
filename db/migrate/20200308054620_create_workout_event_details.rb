class CreateWorkoutEventDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_event_details do |t|
      t.references :workout_event, null: false, foreign_key: true
      t.references :workout_activity, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true
    end
  end
end
