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
      calculated_tags + tags.map(&:name)
    end

    COLLECTABLES = {
      log_entries: Log::Entries,
      meal_events: Meal::Event,
      medication_events: Medication::Event,
      snack_events: Snack::Event,
      supplement_events: Supplement::Event,
      workout_events: Workout::Event,
    }.freeze

    COLLECTABLES.each_pair do |attr, klass|
      attribute attr do
        klass.for(date).map(&:presentable)
      end
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
