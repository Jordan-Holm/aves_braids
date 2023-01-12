class Service < ApplicationRecord

    validates :service_type, :service_estimate, :approx_time, :service_img, :description, presence :
    validates :service_type, uniquenesss: true
    validates :service_estimate, :approx_time, numericality: true

end
