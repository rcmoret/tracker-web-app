# frozen_string_literal: true

module Day
  class Record < ActiveRecord::Base
    include Presentable
    self.table_name = :days
    has_many :tag_joins, class_name: 'Day::TagJoin', foreign_key: :day_id
    has_many :tags, through: :tag_joins
    validates :month, inclusion: (1..12)
    validates :year, inclusion: (2020..2030)
    validates :day, inclusion: (1..31)
    validate :valid_day!

    def self.for(day:, month:, year:)
      find_or_create_by(day: day, month: month, year: year)
    end

    private

    def presenter_klass
      Presenter
    end

    def valid_day!
      return if normal_month?
      return if day <= 28 || (day == 29 && leap_year?)

      errors.add(:date, "Could not format a valid date: month: #{month}, day: #{day} year: #{year}")
    end

    def normal_month?
      return true if [1, 3, 5, 7, 8, 10, 12].include?(month)

      [4, 6, 9, 11].include?(month) && day <= 30
    end

    def leap_year?
      return false unless (year % 4).zero?
      return true unless (year % 100).zero?

      (year % 400).zero?
    end
  end
end
