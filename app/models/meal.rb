# frozen_string_literal: true

module Meal
  def self.table_name_prefix
    :meal_
  end
end

require './app/models/meal/event'
