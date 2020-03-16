# frozen_string_literal: true

module Shared
  class Scopes
    module For
      scope :for, ->(date) { where(event_time: date.all_day) }
    end
  end
end
