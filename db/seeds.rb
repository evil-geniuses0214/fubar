# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
profiles = [
    {
        name: 'Michael',
        picture: 'https://w0.peakpx.com/wallpaper/569/572/HD-wallpaper-abduction-eclipse-jacob-black-taylor-lautner-twilight.jpg',
        branch_of_service: 'Army',
        military_status: 'Retired',
        city: 'Austin',
        state: 'Texas',
        favorite_beer: 'Red Horse',
        duty_station: 'Texas',
        about_me: 'My name is Jacob and I like to partyyyyy!!!'
    }
]

user = User.find 1

profiles.each do | value |
    user.create_profile value
end
