# frozen_string_literal: true

module Log
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

    delegate :presentable, to: :log_entry

    private

    attr_reader :params

    def log_entry
      @log_entry ||= Entry.new(log_entry_params)
    end

    def details
      @details ||= event_detail_params do |detail_params|
        log_entry.details.build(detail_params)
      end
    end

    def log_entry_params
      @log_entry_params ||= params.slice(*Entry::PUBLIC_ATTRS).except('details')
    end

    def event_detail_params
      params.fetch('details', []).map do |detail|
        yield(detail.slice(*Detail::PUBLIC_ATTRS))
      end
    end

    def objects
      @objects ||= [log_entry] + details
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
