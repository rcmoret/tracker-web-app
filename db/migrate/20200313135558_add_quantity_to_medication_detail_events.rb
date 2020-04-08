class AddQuantityToMedicationDetailEvents < ActiveRecord::Migration[5.2]
  def self.up
    add_column :medication_event_details, :quantity, :integer
    change_column :medication_event_details, :quantity, :integer, null: false
  end

  def self.down
    remove_column :medication_event_details, :quantity
  end
end
