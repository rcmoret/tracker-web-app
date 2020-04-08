# frozen_string_literal: true

require 'spec_helper'

RSpec.describe BasePresenter do
  describe '.attribute' do
    context 'when called without a block' do
      it 'calls the instance method of the same name' do
        identifier = 'b7e4cF'
        presentable_instance = PresentableClass.new(identifier: identifier, values: [])
        subject = ItemPresenter.new(presentable_instance).attributes

        expect(subject[:identifier]).to eq identifier
      end
    end

    context 'when called with a block' do
      it 'calls the block in the instance context' do
        values = [1, 1, 2, 3, 5, 8, 13]
        presentable_instance = PresentableClass.new(identifier: '', values: values)
        subject = ItemPresenter.new(presentable_instance)

        expect(subject.attributes[:values]).to eq values.map(&:to_s)
      end
    end
  end

  describe '.to_json' do
    it 'returns the attributes from the parent class plus dynamically addes ones' do
      identifier = 'b7e4cF'
      values = [1, 1, 2, 3, 5, 8, 13]
      presentable_instance = PresentableClass.new(identifier: identifier, values: values)
      subject = ItemPresenter.new(presentable_instance)

      expect(subject.to_json).to eq(
        {
          uuid: PresentableClass::UUID,
          identifier: identifier,
          values: values.map(&:to_s),
        }.to_json
      )
    end
  end
end

class ItemPresenter < BasePresenter
  attribute :identifier
  attribute :values do
    values.map(&:to_s)
  end
end

class PresentableClass
  def initialize(identifier:, values:)
    @identifier = identifier
    @values = values
  end

  UUID = SecureRandom.uuid

  attr_reader :identifier,
              :values

  def attributes
    {
      uuid: UUID,
    }
  end
end

class WrapperClass
  def item(identifier:, values:)
    PresentableClass.new(identifier: identifier, values: values)
  end
end
