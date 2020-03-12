# frozen_string_literal: true

class BasePresenter < SimpleDelegator
  class << self
    def supplemental_attributes
      @supplemental_attributes ||= {}
    end

    def attribute(name, &block)
      supplemental_attributes.merge!(name => block)
    end
  end

  def attributes
    supplemental_attributes.reduce(super.deep_symbolize_keys) do |hash, (key, block)|
      if block.nil?
        hash.merge(key => send(key))
      else
        hash.merge(key => instance_eval(&block))
      end
    end
  end

  private

  def object
    __getobj__
  end

  def supplemental_attributes
    self.class.supplemental_attributes
  end
end
