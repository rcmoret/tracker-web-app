# frozen_string_literal: true

use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: %i[get post put options delete]
  end
end

map '/graphiql' do
  run Service::Graphiql.new
end

map '/api/graphql' do
  run API::Graphql.new
end

map '/api/medications' do
  run API::Medication.new
end

map '/api/units' do
  run API::Unit.new
end

map '/api/victuals' do
  run API::VictualItem.new
end
