# frozen_string_literal: true

module Log
  class DetailType < ActiveRecord::Base
    validates :description, presence: true, uniqueness: true

    PUBLIC_ATTRS = %w[
      description
    ].freeze
  end
end
