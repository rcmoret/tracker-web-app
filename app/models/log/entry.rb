# frozen_string_literal: true

module Log
  class Entry < ActiveRecord::Base
    includes Presentable
    validates :notes, presence: true

    private

    def presenter_klass
      EntryPresenter
    end
  end
end
