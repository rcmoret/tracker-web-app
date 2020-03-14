# frozen_string_literal: true

module Log
  class Entry < ActiveRecord::Base
    includes Presentable
    validates :notes, presence: true
    validates :event_time, presence: true
    alias_attribte :narrative, :notes

    PUBLIC_ATTRS = %w[
      event_time
      narrative
    ].freeze

    attribute

    def self.form
      Form
    end

    private

    def presenter_klass
      EntryPresenter
    end
  end
end
