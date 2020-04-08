# frozen_string_literal: true

module Supplement
  class Type < ActiveRecord::Base
    include Presentable
    belongs_to :unit
    validates :name, presence: true, uniqueness: true

    PUBLIC_ATTRS = %w[
      name
      unit_id
    ].freeze

    private

    def presenter_klass
      TypePresenter
    end
  end
end
