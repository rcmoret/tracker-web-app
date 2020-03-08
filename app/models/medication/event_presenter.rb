# frozen_string_literal: true

module Medication
  class EventPresenter < SimpleDelegator
    def details
      super.map(&:presentable)
    end
  end
end
