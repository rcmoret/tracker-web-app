# frozen_string_literal: true

module Day
  class Presenter < SimpleDelegator
    DATE_METHODS = %i[
      monday?
      tuesday?
      wednesday?
      thursday?
      friday?
      saturday?
      sunday?
    ].freeze

    def tags
      calculated_tags + super.map(&:name)
    end

    private

    delegate(*DATE_METHODS, to: :as_date)

    def calculated_tags
      tags = []
      tags << 'weekend' if weekend?
      tags << 'friday' if friday?
      tags << 'weekday' if weekday?

      tags
    end

    def weekend?
      saturday? || sunday?
    end

    def weekday?
      monday? || tuesday? || wednesday? || thursday?
    end
  end
end
