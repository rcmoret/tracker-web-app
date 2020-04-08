class CreateMealTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_types do |t|
      t.string :name, null: false
    end

    add_index :meal_types, :name, unique: true
  end
end
