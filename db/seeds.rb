user1 = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')

posts = [
  {
    title: 'Green Eggs and Ham',
    content: 'Everyday I wake up, and  **** excellence'
  },
  {
    title: 'Drago',
    content: 'I think I still have brain damage from that fight. Nothing a little workout wont clear up.'
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
    title: 'AYYYE AYYE SIR!!!!',
    content: 'This is how we do it'
  },
  {
    title: 'Should have gone to the Air Force',
    content: 'I miss real food. Some of moms pot pie.'
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

posts.each do |value|
    user3.posts.create(value)
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

user4 = User.fourth || User.create(email: 'test4@test.com', password: 'password4', password_confirmation: 'password4')

posts = [
  {
    title: 'LEARN Academy',
    content: '.....So, who else hates React?'
  }
]

posts.each do |value|
  user4.posts.create(value)
end

profiles = [
  {
    name: 'Alexander Briley',
    picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ioRIFMu7wgPo6j3yF-JctwHaFQ%26pid%3DApi&f=1',
    branch_of_service: 'Navy',
    military_status: 'Retired',
    city: 'NY',
    state: 'NY',
    favorite_beer: 'Bud Light',
    duty_station: '7 Seas',
    about_me: 'In the navy, Yes, you can sail the seven seas. In the navy Yes, you can put your mind at ease.'
  }
]


profiles.each do | value |
  user4.create_profile value
end

user5 = User.fifth || User.create(email: 'test5@test.com', password: 'password5', password_confirmation: 'password5')

  profiles = [
    {
      name: 'Robert Rudolph Remus',
      picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faa%2Fde%2F82%2Faade829cc1769c3abd56e8cb1b1e3e83.jpg&f=1&nofb=1',
      branch_of_service: 'Army',
      military_status: 'Retired',
      city: 'Detroit',
      state: 'Michigan',
      favorite_beer: 'Bud Light',
      duty_station: 'Squared Circle',
      about_me: 'I love the scent of burnt flesh in the morning.'
    }
  ]

profiles.each do | value |
  user5.create_profile value
end


sarah = User.create(email: 'sarah@test.com', password: 'password', password_confirmation: 'password')
profiles = [
  {
    name: 'Sarah Proctor',
    picture: 'https://www.learnacademy.org/wp-content/uploads/2019/08/Sarah-250x250.png',
    branch_of_service: 'Chairforce',
    military_status: 'None',
    city: 'SD',
    state: 'CA',
    favorite_beer: 'Somthing fun but also intresting',
    duty_station: 'LEARN Academy',
    about_me: 'Team Evil Geniuses is the greatest thing thats ever happened to LEARN.  You can quote me on that!'
  }
]
profiles.each do |attr|
  sarah.create_profile attr
end



charlean = User.create(email: 'charlean@test.com', password: 'password', password_confirmation: 'password')
profiles = [
  {
    name: 'Charlean Baxter',
    picture: 'https://www.learnacademy.org/wp-content/uploads/2022/02/Charlean-250x250.png',
    branch_of_service: 'Navy',
    military_status: 'Done with it',
    city: 'SD',
    state: 'CA',
    favorite_beer: 'Inspiration',
    duty_station: 'LEARN Academy',
    about_me: 'FULL STACK DEVELOPER.'
  }
]

profiles.each do |attr|
  charlean.create_profile attr
end

austin = User.create(email: 'austin@test.com', password: 'password', password_confirmation: 'password')
profiles = [
  {
    name: 'Austin Walker',
    picture: 'https://www.learnacademy.org/wp-content/uploads/2021/05/Austin-250x250.png',
    branch_of_service: 'Chairforce',
    military_status: 'None',
    city: 'Austin',
    state: 'Tx',
    favorite_beer: 'Lonestar',
    duty_station: 'LEARN Academy',
    about_me: 'Your pull request has to go through this guy first!'
  }
]
profiles.each do |attr|
  austin.create_profile attr
end


hartman = User.create(email: 'hartman@test.com', password: 'password', password_confirmation: 'password')
profiles = [
  {
    name: 'Hartman Hard',
    picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LFeQebrRz7htPuwBeK3ViwHaEK%26pid%3DApi&f=1',
    branch_of_service: 'Marines',
    military_status: 'RIP',
    city: 'Paris Island.',
    state: 'SC',
    favorite_beer: 'Blood',
    duty_station: 'Paris Island',
    about_me: 'Bullshit. It looks to me like the best part of you ran down the crack of your mamas ass and ended up as a brown stain on the mattress.!'
  }
]
profiles.each do |attr|
  hartman.create_profile attr
end

dick = User.create(email: 'dick@test.com', password: 'password', password_confirmation: 'password')
profiles = [
  {
    name: 'Dick Winters',
    picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F_g9kUAifNSFA%2FTSqdk63Z-rI%2FAAAAAAAAAgo%2FZK-jni2iqJg%2Fs1600%2Fbob.jpg&f=1&nofb=1',
    branch_of_service: 'Army',
    military_status: 'Retired',
    city: 'Ephrata',
    state: 'PA',
    favorite_beer: 'Quakers Dont Drink',
    duty_station: 'Camp Toccoa',
    about_me: 'A-I-R-B-O-R-N-E!!!!'
  }
]
profiles.each do |attr|
  dick.create_profile attr
end

steven = User.create(email: 'steven@test.com', password: 'password', password_confirmation: 'password')
profiles = [
  {
    name: 'Steven Rogers',
    picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aVAKjjRW9Z_PD4eMbfatWAHaHP%26pid%3DApi&f=1',
    branch_of_service: 'Army',
    military_status: 'Retired',
    city: 'S.H.I.E.L.D.',
    state: 'HQ',
    favorite_beer: 'Milk',
    duty_station: 'Classified',
    about_me: 'The hell I cant! Im a Captain!'
  }
]
profiles.each do |attr|
  steven.create_profile attr
end








