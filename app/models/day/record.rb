# frozen_string_literal: true

module Day
  class Record < ActiveRecord::Base
    self.table_name = :days

    def self.for(day:, month:, year:)
      find_or_create_by(day: day, month: month, year: year)
    end
  end
end
