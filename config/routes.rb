Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  ## set Route Path
  root 'pages#index'

  # namespace API
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # routes request that are NOT defined in api back to index path - 
  get '*path', to: 'pages#index', via: :all
end
