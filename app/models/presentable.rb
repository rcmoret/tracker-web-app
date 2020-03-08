# frozen_string_literal: true

module Presentable
  def presentable
    presenter_klass.new(self)
  end
end
