require 'rails_helper'

RSpec.describe Profile, type: :model do
  describe 'Create profile' do
    it 'wont create a profile in the database without a name' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:name]).to_not be_empty
    end
    it 'wont create a profile in the database without a picture' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:picture]).to_not be_empty
    end
    it 'wont create a profile in the database without a branch_of_service' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:branch_of_service]).to_not be_empty
    end
    it 'wont create a profile in the database without a military_status' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:military_status]).to_not be_empty
    end
    it 'wont create a profile in the database without a city' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:city]).to_not be_empty
    end
    it 'wont create a profile in the database without a state' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:state]).to_not be_empty
    end
    it 'wont create a profile in the database without a favorite_beer' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:favorite_beer]).to_not be_empty
    end
    it 'wont create a profile in the database without a duty_station' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', about_me: 'My name is chuck and I dont give a what?'
      expect(profile.errors[:duty_station]).to_not be_empty
    end
    it 'wont create a profile in the database without a about_me' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      user1.save
      profile = user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego'
      expect(profile.errors[:about_me]).to_not be_empty
    end
  end
end
