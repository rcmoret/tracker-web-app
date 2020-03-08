# frozen_string_literal: true

require 'rake'
require 'standalone_migrations'

StandaloneMigrations::Tasks.load_tasks

task default: 'app:start'
task console: 'app:console'

namespace :app do
  desc 'Start application'
  task start: :setup do
    Rack::Server.start(Settings::SERVER_SETTINGS.dup)
  end

  desc 'Start application console'
  task console: :setup do
    require 'irb'
    require 'irb/completion'
    ARGV.clear
    IRB.start
  end

  desc 'loading, requiring files'
  task :setup do
    ENV['RACK_ENV'] = 'development'
    require 'bundler/setup'
    Bundler.require(:development)
    require './config/settings'
    require './config/environments'
    require './app/models/day'
  end
end
