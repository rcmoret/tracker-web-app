# frozen_string_literal: true

module Medication
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
  end
end
