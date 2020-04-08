# frozen_string_literal: true

module Supplement
  class EventDetailPresenter < BasePresenter
    attribute :type do
      type.presentable
    end
  end
end
