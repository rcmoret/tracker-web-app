# frozen_string_literal: true

module Medication
  class EventDetail < ActiveRecord::Base
    belongs_to :event, foreign_key: :medication_event_id
    belongs_to :type, foreign_key: :medication_type_id
  end
end
