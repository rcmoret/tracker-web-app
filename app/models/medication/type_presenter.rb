# frozen_string_literal: true

module Medication
  class TypePresenter < BasePresenter
    attribute :unit do
      object.unit.display_name
    end
  end
end
