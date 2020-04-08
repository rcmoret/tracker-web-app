# frozen_string_literal: true

module Supplement
  class TypePresenter < BasePresenter
    attribute :unit do
      unit.display_name
    end
  end
end
