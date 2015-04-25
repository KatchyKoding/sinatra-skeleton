# Homepage (Root path)
get '/' do
  erb :index
end
get '/new' do
  erb :newContact
end
get '/list' do
  erb :listContact
end
