# frozen_string_literal: true

module Supplement
  class EventDetail < ActiveRecord::Base
    include Presentable
    belongs_to :event, foreign_key: :supplement_event_id
    belongs_to :type, foreign_key: :supplement_type_id
    alias_attribute :event_id, :supplement_event_id
    alias_attribute :type_id, :supplement_type_id

    PUBLIC_ATTRS = %w[
      event_id
      quantity
      type_id
    ].freeze

    private

    def presenter_klass
      EventDetailPresenter
    end
  end
end
