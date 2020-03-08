# frozen_string_literal: true

module Log
  class DetailPresenter < SimpleDelegator
    def description
      "#{rating} for #{unit.display_name}"
    end
  end
end
