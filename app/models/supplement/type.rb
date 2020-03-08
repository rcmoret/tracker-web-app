# frozen_string_literal: true

module Supplement
  class Type < ActiveRecord::Base
    belongs_to :unit
    validates :name, presence: true, uniqueness: true
  end
end