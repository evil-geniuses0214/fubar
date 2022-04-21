# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

profiles = [
    {
        name: 'Rambo',
        picture: 'https://lionsgate.brightspotcdn.com/4e/0c/6c80e6a243b3b1ee8043c88db8c8/rambo4-movies-about-01.jpg',
        branch_of_service: 'Army',
        military_status: 'Retired',
        city: 'Baton Rouge',
        state: 'LA',
        favorite_beer: 'Pigs Blood',
        duty_station: 'Classified',
        about_me: 'They drew first blood, not me.'
    },
    {
      name: 'Gomer Pyle',
      picture: 'https://faroutmagazine.co.uk/static/uploads/2021/08/Full-Metal-Jacket.jpg',
      branch_of_service: 'Marine Corp',
      military_status: 'Medically Discharged',
      city: 'Austin',
      state: 'TX',
      favorite_beer: 'Red Horse',
      duty_station: 'Texas',
      about_me: 'Citizens Arrest!'
    },
    {
      name: 'Major Payne',
      picture: 'https://images03.military.com/sites/default/files/styles/full/public/2020-03/mayjorpaynelead1500.jpg',
      branch_of_service: 'Army',
      military_status: 'Retired',
      city: 'Charlottesville',
      state: 'VA',
      favorite_beer: 'Red Horse',
      duty_station: 'Texas',
      about_me: 'Boy, I am two seconds from being on you like white on rice in a glass of milk on a paper plate in a snowstorm. Im gonna put my foot so far up your ass, the water on my knee will quench your thirst!!!'
    },
    # {
    #   name: 'Michael',
    #   picture: 'https://www.rollingstone.com/wp-content/uploads/2022/02/SnoopDogg-1.jpeg?resize=1800,1200&w=1200',
    #   branch_of_service: 'Army',
    #   military_status: 'Retired',
    #   city: 'Austin',
    #   state: 'Texas',
    #   favorite_beer: 'Red Horse',
    #   duty_station: 'Texas',
    #   about_me: 'My name is Jacob and I like to partyyyyy!!!'
    # }
]

user = User.find 2

profiles.each do | value |
    user.create_profile value
end
