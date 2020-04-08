# frozen_string_literal: true

module Medication
  def self.table_name_prefix
    :medication_
  end
end

require './app/models/medication/type_presenter'
require './app/models/medication/type'
require './app/models/medication/event'
require './app/models/medication/event_detail'
require './app/models/medication/event_presenter'
require './app/models/medication/event_detail_presenter'
require './app/models/medication/form'
require './app/models/medication/api/events'
require './app/models/medication/api/types'
