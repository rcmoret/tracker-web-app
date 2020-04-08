# frozen_string_literal: true

module Medication
  class EventDetail < ActiveRecord::Base
    include Presentable
    belongs_to :event, foreign_key: :medication_event_id
    belongs_to :type, foreign_key: :medication_type_id
    alias_attribute :medication_event_id, :event_id
    alias_attribute :medication_type_id, :type_id

    private

    def presenter_klass
      EventDetailPresenter
    end
  end
end
