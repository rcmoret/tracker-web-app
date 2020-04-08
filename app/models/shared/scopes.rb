# frozen_string_literal: true

module Shared
  class Scopes
    module For
      def self.included(base)
        base.class_eval do
          scope :for, ->(date) { where(event_time: date.all_day) }
        end
      end
    end
  end
end
