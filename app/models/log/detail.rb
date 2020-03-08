# frozen_string_literal: true

module Log
  class Detail < ActiveRecord::Base
    belongs_to :unit
    belongs_to :entry, foreign_key: :log_entry_id
  end
end
