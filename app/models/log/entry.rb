# frozen_string_literal: true

module Log
  class Entry < ActiveRecord::Base
    include Presentable
    include Shared::Scopes::For
    validates :notes, presence: true
    validates :event_time, presence: true
    alias_attribute :narrative, :notes

    PUBLIC_ATTRS = %w[
      event_time
      narrative
    ].freeze

    def self.form
      Form
    end

    private

    def presenter_klass
      EntryPresenter
    end
  end
end
