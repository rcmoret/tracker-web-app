class CreateSupplementEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :supplement_events do |t|
      t.datetime :event_time, null: false
    end
  end
end
