# frozen_string_literal: true

module Medication
  class EventPresenter < BasePresenter
    attribute :details do
      object.details..map(&:presentable)
    end
  end
end
