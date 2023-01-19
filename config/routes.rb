Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :services
  end

  match '*unmatched', to: 'application#not_found_method', via: :all

end
