# frozen_string_literal: true

module Workout
  class EventDetail < ActiveRecord::Base
    include Presentable
    belongs_to :event, foreign_key: :workout_event_id
    belongs_to :activity, foreign_key: :workout_activity_id
    alias_attribute :activity_id, :workout_activity_id
    alias_attribute :event_id, :workout_event_id

    PUBLIC_ATTRS = %w[
      activity_id
      event_id
    ].freeze

    private

    def presenter_klass
      EventDetailPresenter
    end
  end
end
