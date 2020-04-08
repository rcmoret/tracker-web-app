# frozen_string_literal: true

module Day
  class TagJoin < ActiveRecord::Base
    self.table_name = :day_tags
    belongs_to :day, class_name: 'Day::Record', foreign_key: :day_id
    belongs_to :tag, class_name: 'Day::Tag', foreign_key: :tag_id
  end
end
