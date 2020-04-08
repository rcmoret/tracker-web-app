class AddEventTimeToLogEntry < ActiveRecord::Migration[5.2]
  def self.up
    add_column :log_entries, :event_time, :date_time
    change_column :log_entries, :event_time, :date_time, null: false
  end

  def self.down
    remove_column :log_entries, :event_time
  end
end
