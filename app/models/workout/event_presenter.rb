# frozen_string_literal: true

module Workout
  class EventPresenter < BasePresenter
    attribute :details do
      details.map(&:presentable)
    end
  end
end
