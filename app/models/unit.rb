# frozen_string_literal: true

class Unit < ActiveRecord::Base
  validates :name, uniqueness: true, presence: true
  validates :display_name, presence: true
end
