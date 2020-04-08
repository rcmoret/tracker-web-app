class CreateMedicationEventDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :medication_event_details do |t|
      t.references :medication_event, foreign_key: true, null: false
      t.references :medication_type, foreign_key: true, null: false
    end
  end
end
