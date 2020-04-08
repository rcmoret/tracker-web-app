# frozen_string_literal: true

module Victual
  def self.table_name_prefix
    :victual_
  end
end

require './app/models/victual/type'
require './app/models/victual/item'
require './app/models/victual/item_presenter'
require './app/models/victual/api/items'
