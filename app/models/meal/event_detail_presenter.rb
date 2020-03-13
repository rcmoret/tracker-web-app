# frozen_string_literal: true

module Meal
  class EventDetailPresenter < BasePresenter
    attribute :victual_item do
      object.victual_item.presentable
    end

    attribute :unit do
      object.unit.name
    end
  end
end
