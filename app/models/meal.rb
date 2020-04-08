# frozen_string_literal: true

module Meal
  def self.table_name_prefix
    :meal_
  end
end

require './app/models/meal/type'
require './app/models/meal/event_presenter'
require './app/models/meal/event'
require './app/models/meal/form'
require './app/models/meal/event_detail'
require './app/models/meal/event_detail_presenter'
require './app/models/meal/api/events'
