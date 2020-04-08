# frozen_string_literal: true

module Supplement
  def self.table_name_prefix
    :supplement_
  end
end

require './app/models/supplement/type'
require './app/models/supplement/type_presenter'
require './app/models/supplement/form'
require './app/models/supplement/event'
require './app/models/supplement/event_presenter'
require './app/models/supplement/event_detail_presenter'
require './app/models/supplement/event_detail'
require './app/models/supplement/api/events'
require './app/models/supplement/api/types'
