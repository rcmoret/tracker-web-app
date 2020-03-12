# frozen_string_literal: true

class BasePresenter < SimpleDelegator
  class << self
    def supplemental_attributes
      @supplemental_attributes ||= []
    end

    def attribute(name, &block)
      supplemental_attributes << name

      define_method name do
        instance_eval(&block)
      end
    end
  end

  def supplemental_attributes
    self.class.supplemental_attributes
  end

  def attributes
    supplemental_attributes.reduce(super.deep_symbolize_keys) do |hash, supplemental_attr|
      hash.merge(supplemental_attr => send(supplemental_attr))
    end
  end

  private

  def object
    __getobj__
  end
end
