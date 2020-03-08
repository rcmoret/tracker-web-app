# frozen_string_literal: true

require './app/models/day/record'

module Day
  def self.model
    Record
  end

  MODEL_METHODS = %i[
    all
    find
    find_by
    for
    where
  ].freeze

  MODEL_METHODS.each do |method|
    define_singleton_method method do |*args|
      model.send(method, *args)
    end
  end
end
