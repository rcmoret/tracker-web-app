# frozen_string_literal: true

module Day
  class Presenter < BasePresenter
    DATE_METHODS = %i[
      monday?
      tuesday?
      wednesday?
      thursday?
      friday?
      saturday?
      sunday?
    ].freeze

    attribute :tags do
      calculated_tags + object.tags.map(&:name)
    end

    private

    def date
      @date ||= Date.new(year, month, day)
    end

    delegate(*DATE_METHODS, to: :date)

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
