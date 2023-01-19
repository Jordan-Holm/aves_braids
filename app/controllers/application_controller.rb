class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
    
    def not_found_method
        render file: Rails.public_path.join('404.html'), status: :not_found, layout: false
    end
end
