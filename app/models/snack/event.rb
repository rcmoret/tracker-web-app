# frozen_string_literal: true

module Snack
  class Event < ActiveRecord::Base
    self.table_name = :snack_event
    belongs_to :victual_item
    belongs_to :unit
    delegate :victual_type, to: :victual_item
  end
end
