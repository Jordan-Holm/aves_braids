Rails.application.routes.draw do
  
  namespace :api do
    resources :services
  end

  match '*unmatched', to: 'application#not_found_method', via: :all

end
