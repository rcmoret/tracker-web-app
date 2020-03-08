# frozen_string_literal: true

module Medication
  def table_name_prefix
    :medication_
  end
end

require './app/models/medication/type'
require './app/models/medication/event'
require './app/models/medication/event_detail'
