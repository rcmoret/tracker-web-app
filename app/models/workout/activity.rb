# frozen_string_literal: true

module Workout
  class Activity < ActiveRecord::Base
    include Presentable
    validates :name, presence: true, uniqueness: true

    PUBLIC_ATTRS = %w[
      name
    ].freeze
  end
end
