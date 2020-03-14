# frozen_string_literal: true

module Supplement
  class Event < ActiveRecord::Base
    include Presentable
    validates :event_time, presence: true
    has_many :details, class_name: 'EventDetail', foreign_key: :supplement_event_id

    PUBLIC_ATTRS = %w[
      details
      event_time
    ].freeze

    def self.form
      Form
    end

    private

    def presenter_klass
      EventPresenter
    end
  end
end
