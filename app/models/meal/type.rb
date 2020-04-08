# frozen_string_literal: true

module Meal
  class Type < ActiveRecord::Base
    validates :name, uniqueness: true, presence: true
  end
end
