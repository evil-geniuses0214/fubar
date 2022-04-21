user1 = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')

posts = [
  {
    title: 'User 1 test post',
    content: 'The start of something special1'
  },
  {
    title: 'User 1 delete test post',
    content: 'The start of something special2'
  }
]

posts.each do |post_hash|
    user1.posts.create(post_hash)
end

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
  }
]

profiles.each do | value |
    user1.create_profile value
end

user2 = User.second || User.create(email: 'test2@test.com', password: 'password2', password_confirmation: 'password2')

posts = [
  {
    title: 'User 2 test post',
    content: 'This is how we do it'
  },
  {
    title: 'User 2 delete test post',
    content: 'This is how we do it 2'
  }
]

posts.each do |post_hash|
    user2.posts.create(post_hash)
end

profiles = [
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
  }
]

profiles.each do | value |
    user2.create_profile value
end

user3 = User.third || User.create(email: 'test3@test.com', password: 'password3', password_confirmation: 'password3')

posts = [
  {
    title: 'User 2 test post',
    content: 'This is how we do it'
  },
  {
    title: 'User 2 delete test post',
    content: 'This is how we do it 2'
  }
]

posts.each do |post_hash|
    user3.posts.create(post_hash)
end

profiles = [
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
]

profiles.each do | value |
    user3.create_profile value
end