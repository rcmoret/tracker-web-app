class CreateWorkoutActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_activities do |t|
      t.string :name, null: false
    end

    add_index :workout_activities, :name, unique: true
  end
end
