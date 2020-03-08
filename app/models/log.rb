# frozen_string_literal: true

module Log
  def self.table_name_prefix
    :log_
  end
end

require './app/models/log/entry_presenter'
require './app/models/log/detail_presenter'
require './app/models/log/entry'
require './app/models/log/detail'
