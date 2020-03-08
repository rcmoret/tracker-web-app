# frozen_string_literal: true

module Day
  class Record < ActiveRecord::Base
    self.table_name = :days
    has_many :tag_joins, class_name: 'Day::TagJoin', foreign_key: :day_id
    has_many :tags, through: :tag_joins

    def self.for(day:, month:, year:)
      find_or_create_by(day: day, month: month, year: year)
    end
  end
end
