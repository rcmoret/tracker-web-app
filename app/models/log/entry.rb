# frozen_string_literal: true

module Log
  class Entry < ActiveRecord::Base
    validates :notes, presence: true
  end
end
