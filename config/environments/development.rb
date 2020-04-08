# frozen_string_literal: true

# rubocop:disable Style/GlobalVars
ActiveRecord::Base.logger =
  if CONFIG[:debug?] == true
    Logger.new(STDOUT)
  else
    Logger.new($logger)
  end
# rubocop:enable Style/GlobalVars
