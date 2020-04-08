# frozen_string_literal: true

module Victual
  class Item < ActiveRecord::Base
    include Presentable
    validates :name, uniqueness: true
    belongs_to :type, foreign_key: :victual_type_id
    alias_attribute :type_id, :victual_type_id

    PUBLIC_ATTRS = %w[
      name
      type_id
    ].freeze

    private

    def presenter_klass
      ItemPresenter
    end
  end
end
