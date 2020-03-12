# frozen_string_literal: true

module Log
  class DetailPresenter < BasePresenter
    attribute :description do
      "#{rating} for #{unit.display_name}"
    end
  end
end
