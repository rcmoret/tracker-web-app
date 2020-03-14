# frozen_string_literal: true

module Meal
  class Event < ActiveRecord::Base
    include Presentable
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :meal_event_id
    belongs_to :type, foreign_key: :meal_type_id
    alias_attribute :type_id, :meal_type_id

    PUBLIC_ATTRS = %w[
      details
      event_time
      type_id
    ].freeze

    def self.form
      Form
    end

    def destroy
      return false if details.any?

      super
    end

    private

    def presenter_klass
      EventPresenter
    end
  end
end
