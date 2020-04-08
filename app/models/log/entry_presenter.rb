# frozen_string_literal: true

module Log
  class EntryPresenter < BasePresenter
    attribute :details do
      object.details.map(&:presentable)
    end
  end
end
