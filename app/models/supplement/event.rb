# frozen_string_literal: true

module Supplement
  class Event < ActiveRecord::Base
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :supplement_event_id
  end
end
