class Service < ApplicationRecord

    validates :service_type, :service_estimate, :approx_time, :description, presence: true

end
