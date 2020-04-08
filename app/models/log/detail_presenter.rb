# frozen_string_literal: true

module Log
  class DetailPresenter < BasePresenter
    attribute :type do
      type.description
    end
  end
end
