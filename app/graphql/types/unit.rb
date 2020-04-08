# frozen_string_literal: true

module Types
  class Unit < BaseType
    field :id, ID, null: false
    field :name, String, 'the full description of the unit', null: false
    field :display_name,
          String,
          'a (possibly) shorter version/abbreviation of the name',
          null: false
  end
end
