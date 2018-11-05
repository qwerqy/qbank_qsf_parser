Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  get '/search' => 'home#search'
  get 'answers/index'
  get 'answers/show'
  get 'questions/index'
  get 'questions/show'
  get 'surveys/index'
  get 'surveys/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
