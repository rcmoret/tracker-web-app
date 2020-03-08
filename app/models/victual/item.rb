# frozen_string_literal: true

module Victual
  class Item < ActiveRecord::Base
    validates :name, uniqueness: true
    belongs_to :unit
    belongs_to :type, foreign_key: :victual_type_id
  end
end
