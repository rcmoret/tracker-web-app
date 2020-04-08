class CreateMedicationTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :medication_types do |t|
      t.string :name, null: false
      t.references :unit, foreign_key: true, null: false
    end

    add_index :medication_types, :name, unique: true
  end
end
