require 'rails_helper'

RSpec.describe "Profiles", type: :request do
  describe "GET /index" do
    it 'gets a list of profiles' do
    user1 = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')
    user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?', user_id: true
    get '/profiles'
    profileHard = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(profileHard.length).to eq 1
    end
  end
  describe 'POST /create' do
    it 'creates a profile' do
    user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
    sign_in user1
    user1.save
    profile_params = {
      profile: {
        name: 'Carlos', 
        picture: 'https://i.imgur.com/Jb9TEnG.png', 
        branch_of_service: 'navy', 
        military_status: 'active', 
        city: 'san diego', 
        state: 'ca', 
        favorite_beer: 'Budwiser', 
        duty_station: 'NAS San Diego', 
        about_me: 'My name is chuck and I dont give a what?',
        user_id: true
      }
    }
    post '/profiles', params: profile_params 
    profile = JSON.parse(response.body)
    expect(response).to have_http_status(201)

    profile = Profile.first

    expect(profile['name']).to eq 'Carlos'
    expect(profile.picture).to eq 'https://i.imgur.com/Jb9TEnG.png'
    expect(profile.branch_of_service).to eq 'navy'
    expect(profile.military_status).to eq 'active'
    expect(profile.city).to eq 'san diego'
    expect(profile.state).to eq 'ca'
    expect(profile.favorite_beer).to eq 'Budwiser'
    expect(profile.duty_station).to eq 'NAS San Diego'
    expect(profile.about_me).to eq 'My name is chuck and I dont give a what?'
    end
  end
  describe 'PATCH /update' do
    it 'updates a profile' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      sign_in user1
      user1.save
    user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
    profile_carlos = Profile.first
    profile_params = {
      profile: {
        name: 'Maurice', 
        picture: 'https://i.imgur.com/Jb9TEnG.png', 
        branch_of_service: 'navy', 
        military_status: 'active', 
        city: 'san diego', 
        state: 'ca', 
        favorite_beer: 'Budwiser', 
        duty_station: 'NAS San Diego', 
        about_me: 'My name is chuck and I dont give a what?',
        user_id: true
      }
    }
    patch "/profiles/#{profile_carlos.id}", params: profile_params
    profile_mystery = Profile.find(profile_carlos.id)

    expect(response).to have_http_status(200)
    expect(profile_mystery.name).to eq 'Maurice'
    end
  end
  describe "DELETE /destroy" do
    it 'deletes a profile from the database' do
      user1 = User.create(email: 'test4@test.com', password: 'password', password_confirmation: 'password')
      sign_in user1
      user1.save
    user1.create_profile name: 'Carlos', picture: 'https://i.imgur.com/Jb9TEnG.png', branch_of_service: 'navy', military_status: 'active', city: 'san diego', state: 'ca', favorite_beer: 'Budwiser', duty_station: 'NAS San Diego', about_me: 'My name is chuck and I dont give a what?'
    profile_carlos = Profile.first
    delete "/profiles/#{profile_carlos.id}"
    expect(response).to have_http_status(200)
    profile = Profile.all
    expect(profile).to be_empty
    end
  end
end
