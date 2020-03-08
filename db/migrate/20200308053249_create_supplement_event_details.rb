class CreateSupplementEventDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :supplement_event_details do |t|
      t.integer :quantity, null: false
      t.references :supplement_event, foreign_key: true, null: false
      t.references :supplement_type, foreign_key: true, null: false
    end
  end
end
