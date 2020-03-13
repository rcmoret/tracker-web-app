class CreateMedicationEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :medication_events do |t|
      t.datetime :event_time, null: false
    end
  end
end
