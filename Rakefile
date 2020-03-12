# frozen_string_literal: true

require 'rake'
require 'standalone_migrations'

StandaloneMigrations::Tasks.load_tasks

task default: 'app:start'
task console: 'app:console'

# rubocop:disable Metrics/BlockLength
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
    require 'graphql'
    require 'sinatra'
    require './config/settings'
    require './config/environments'
    require './app/models/presentable'
    require './app/models/base_presenter'
    require './app/models/day'
    require './app/models/unit'
    require './app/models/victual'
    require './app/models/snack/event'
    require './app/models/meal'
    require './app/models/medication'
    require './app/models/supplement'
    require './app/models/workout'
    require './app/models/log'
    require './app/service/graphiql'
    require './app/graphql/schema'
    require './app/api/graphql'
  end
end
# rubocop:enable Metrics/BlockLength
