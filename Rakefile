require 'rake'

task default: 'app:start'

namespace :app do
  desc 'Start application'
  task start: :setup do
  end

  task :setup do
    ENV['RACK_ENV'] = :development
    require 'bundler/setup'
    Bunlder.require(:development)
  end
end
