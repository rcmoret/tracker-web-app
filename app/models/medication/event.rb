# frozen_string_literal: true

module Medication
  class Event < ActiveRecord::Base
    include Presentable
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :medication_event_id

    private

    def presenter_klass
      EventPresenter
    end
  end
end
