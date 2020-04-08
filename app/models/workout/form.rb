# frozen_string_literal: true

module Workout
  class Form
    include ActiveModel::Model

    def initialize(params)
      @params = params
    end

    def save
      return false unless objects.all?(&:valid?)
      return true if objects.all?(&:save)

      promote_errors
      false
    end

    delegate :presentable, to: :workout_event

    private

    attr_reader :params

    def workout_event
      @workout_event ||= Event.new(workout_event_params)
    end

    def details
      @details ||= event_detail_params do |detail_params|
        workout_event.details.build(detail_params)
      end
    end

    def workout_event_params
      @workout_event_params ||= params.slice(*Event::PUBLIC_ATTRS).except('details')
    end

    def event_detail_params
      params.fetch('details', []).map do |detail|
        yield(detail.slice(*EventDetail::PUBLIC_ATTRS))
      end
    end

    def objects
      @objects ||= [workout_event] + details
    end

    def promote_errors
      objects.select(&:invalid?).each { |object| promote_object_errors(object) }
    end

    def promote_object_errors(object)
      object.errors do |key, message|
        errors.add(key, message)
      end
    end
  end
end
