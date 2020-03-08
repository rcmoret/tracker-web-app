# frozen_string_literal: true

module Day
  class Tag < ActiveRecord::Base
    self.table_name = :tags
    validates :name, unique: true

    def self.for(name)
      find_or_create_by(name: name)
    end
  end
end
