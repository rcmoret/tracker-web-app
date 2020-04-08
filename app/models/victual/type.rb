# frozen_string_literal: true

module Victual
  class Type < ActiveRecord::Base
    VALID_TYPES = [
      FOOD = :food,
      BEVERAGE = :beverage,
    ].freeze
    validates :name, inclusion: VALID_TYPES.map(&:to_s), uniqueness: true
  end
end
