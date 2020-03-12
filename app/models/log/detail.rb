# frozen_string_literal: true

module Log
  class Detail < ActiveRecord::Base
    belongs_to :entry, foreign_key: :log_entry_id
    belongs_to :type, class_name: 'DetailType', foreign_key: :log_entry_type_id
  end
end
