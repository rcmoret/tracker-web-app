# frozen_string_literal: true

class BasePresenter < SimpleDelegator
  class << self
    def supplemental_attributes
      @supplemental_attributes ||= {}
    end

    protected

    def attribute(name, &block)
      supplemental_attributes.merge!(name => block)
    end
  end

  def attributes
    supplemental_attributes.reduce(super.deep_symbolize_keys) do |hash, (key, block)|
      hash.merge(key => evaluate(key, block))
    end
  end

  def to_json(*)
    attributes.to_json
  end

  private

  def evaluate(name, block)
    block.nil? ? send(name) : instance_eval(&block)
  end

  def object
    __getobj__
  end

  def supplemental_attributes
    self.class.supplemental_attributes
  end
end
