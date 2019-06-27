use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: %i(get post put options delete)
  end
end

# map '/memes' do
#   run MemesApi.new
# end
