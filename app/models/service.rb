class Service < ApplicationRecord

    validates :service_type, :service_estimate, :approx_time, :service_img, :description, presence: true

end
