# frozen_string_literal: true

module Victual
  class ItemPresenter < BasePresenter
    delegate :name, to: :type, prefix: true

    attribute :type_name
  end
end
