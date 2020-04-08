# frozen_string_literal: true

module Workout
  class Event < ActiveRecord::Base
    include Presentable
    include Shared::Scopes::For
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :workout_event_id

    def self.form
      Form
    end

    PUBLIC_ATTRS = %w[
      details
      event_time
    ].freeze

    private

    def presenter_klass
      EventPresenter
    end
  end
end
