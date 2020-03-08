# frozen_string_literal: true

module Snack
  class Event < ActiveRecord::Base
    self.table_name = :snack_event
    belongs_to :victual_item
    delegate :victual_type, :unit, to: :victual_item
  end
end
