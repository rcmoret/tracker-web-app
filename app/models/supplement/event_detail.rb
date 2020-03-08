# frozen_string_literal: true

module Supplement
  class EventDetail < ActiveRecord::Base
    belongs_to :event, foreign_key: :supplement_event_id
    belongs_to :type, foreign_key: :supplement_type_id
  end
end
