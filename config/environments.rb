# frozen_string_literal: true

# rubocop:disable Style/GlobalVars
configure do
  environment = ENV['RACK_ENV']
  db_yml = File.open('./config/database.yml')
  db_config = YAML.safe_load(db_yml).fetch(environment)
  CONFIG = { db_config: db_config }.freeze
  load './config/initializers/database.rb'
  load "./config/environments/#{environment}.rb"
  enable :logging
  $logger = Logger.new('./log/sinatra.log')
end
# rubocop:enable Style/GlobalVars
