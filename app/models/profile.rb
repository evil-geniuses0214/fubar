class Profile < ApplicationRecord
    belongs_to :user
    validates :name, :picture, :branch_of_service, :military_status, :city, :state, :favorite_beer, :duty_station, :about_me, presence: true
end
