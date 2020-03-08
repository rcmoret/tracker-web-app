# frozen_string_literal: true

module Log
  class EntryPresenter < SimpleDelegator
    def details
      super.map(&:presentable)
    end
  end
end
