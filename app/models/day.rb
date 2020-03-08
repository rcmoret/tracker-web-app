# frozen_string_literal: true

require './app/models/day/record'
require './app/models/day/tag'
require './app/models/day/tag_join'
require './app/models/day/presenter'

module Day
  def self.model
    Record
  end

  MODEL_METHODS = %i[
    all
    find
    find_by
    first
    for
    last
    where
  ].freeze

  MODEL_METHODS.each do |method|
    define_singleton_method method do |*args|
      model.send(method, *args)
    end
  end
end
