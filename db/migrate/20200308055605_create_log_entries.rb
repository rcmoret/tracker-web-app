# frozen_string_literal: true

class CreateLogEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :log_entries do |t|
      t.text :notes
      t.timestamps
    end
  end
end
