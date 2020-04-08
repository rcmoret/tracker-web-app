# frozen_string_literal: true

module Meal
  class EventPresenter < BasePresenter
    attribute :type_name do
      object.type.name
    end

    attribute :details do
      object.details.map(&:presentable)
    end
  end
end
