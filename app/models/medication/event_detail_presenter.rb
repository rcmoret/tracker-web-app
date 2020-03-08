# frozen_string_literal: true

module Medication
  class EventDetailPresenter < SimpleDelegator
    delegate :unit, :name, to: :type

    def description
      "#{quantity} #{unit.display_name} of #{name}"
    end
  end
end
