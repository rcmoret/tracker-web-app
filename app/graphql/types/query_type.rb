# frozen_string_literal: true

module Types
  class QueryType < BaseType
    field :day, Types::DayType, null: false do
      description 'a days info, tags and events'
      argument :day_number, Integer, required: true
      argument :month, Integer, required: true
      argument :year, Integer, required: true
    end

    def day(day_number:, month:, year:)
      Day.for(day: day_number, month: month, year: year).presentable
    end
  end
end
