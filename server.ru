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

map '/api/meals' do
  run Meal::API::Events.new
end

map '/api/medications' do
  run Medication::API::Events.new
end

map '/api/medication/types' do
  run Medication::API::Types.new
end

map '/api/snacks' do
  run Snack::API::Events.new
end

map '/api/supplements' do
  run Supplement::API::Events.new
end

map '/api/supplement/types' do
  run Supplement::API::Types.new
end

map '/api/units' do
  run API::Unit.new
end

map '/api/victuals' do
  run API::VictualItem.new
end
