class CreateDayTags < ActiveRecord::Migration[5.2]
  def change
    create_table :day_tags do |t|
      t.references :day, foreign_key: true, null: false
      t.references :tag, foreign_key: true, null: false
    end
  end
end
