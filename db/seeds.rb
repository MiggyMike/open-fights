# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

airlines = Airline.create ([
  { 
    name: "United Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  }, 
  { 
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://i.pinimg.com/originals/91/39/57/913957f2db792b01b330494b5374f23c.jpg" 
  }, 
  { 
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  },
  { 
    name: "Spirit",
    image_url: "https://yt3.ggpht.com/ytc/AAUvwnjbxqfdhWX-HecdrCKgtkl8okgUitbEhjS_nhBlVA=s900-c-k-c0x00ffffff-no-rj" 
  }
])

reviews = Review.create([
  {
    title: "Great airline",
    description: 'I had a great time',
    score: 5,
    airline: airlines.first
},
  {
    title: "Bad airline",
    description: 'Just terrible',
    score: 1,
    airline: airlines.first
  }
])