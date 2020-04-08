# frozen_string_literal: true

require 'active_support/testing/time_helpers'

ENV['RACK_ENV'] = 'test'
require 'rake'
require 'active_support/testing/time_helpers'
require 'database_cleaner'
Bundler.require(:test)
load ENV['PWD'] + '/Rakefile'
Rake::Task['app:setup'].invoke
puts Dir['./spec/models/*.rb'].each { |f| puts f.inspect }
# Dir['./spec/models/*.rb'].each { |f| require f }

RSpec.configure do |config|
  config.include(Rack::Test::Methods)
  config.include(Shoulda::Matchers::ActiveModel, type: :model)
  config.include(Shoulda::Matchers::ActiveRecord, type: :model)
  config.include(Shoulda::Matchers::Independent)
  config.include(ActiveSupport::Testing::TimeHelpers)

  config.filter_run_when_matching :focus

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.disable_monkey_patching!

  config.default_formatter = 'doc' if config.files_to_run.one?

  FactoryBot.definition_file_paths = %w[./spec/factories]
  FactoryBot.find_definitions
  config.before(:suite) do
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean
  end
  config.around(:each) do |example|
    DatabaseCleaner.cleaning { example.run }
  end
end

URL_MAP = {
  '/graphiql' => Service::Graphiql,
  '/api/graphql' => API::Graphql.new,
  '/api/logs' => API::Log.new,
  '/api/meals' => API::Meal.new,
  '/api/medications' => API::Medication.new,
  '/api/snacks' => API::Snack.new,
  '/api/supplements' => API::Supplement.new,
  '/api/units' => API::Unit.new,
  '/api/victuals' => API::VictualItem.new,
}.freeze

def app
  Rack::URLMap.new(URL_MAP)
end
