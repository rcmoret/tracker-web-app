# frozen_string_literal: true

module Presentable
  def presentable
    @presentable ||= presenter.attributes
  end

  private

  def presenter
    @presenter ||= presenter_klass.new(self)
  end
end
