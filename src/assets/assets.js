import upload_area from './upload_area.png';
import car_reviews from './categories/car_reviews.jpg';
import car_comparisons from './categories/car_comparisons.jpg';
import maintanance_tips from './categories/maintanance_tips.jpg';
import car_modifications from './categories/car_modifications.jpg';
import driving_tips from './categories/driving_tips.jpg';
import new_technology from './categories/new_technology.jpg';
import ev_vehicles from './categories/ev_vehicles.jpg';
import others from './categories/others.jpg'

import profile_pic from './comment_pics/profile_pic.png';
import profile_pic_1 from './comment_pics/profile_pic_1.jpg';
import profile_pic_2 from './comment_pics/profile_pic_2.jpg';
import profile_pic_3 from './comment_pics/profile_pic_3.jpg';
import profile_pic_4 from './comment_pics/profile_pic_4.jpg';
import profile_pic_5 from './comment_pics/profile_pic_5.jpg';
import profile_pic_6 from './comment_pics/profile_pic_6.jpg';
import profile_pic_7 from './comment_pics/profile_pic_7.jpg';
import profile_pic_8 from './comment_pics/profile_pic_8.jpg';

import blogs_hero_1 from './blogs-hero/blogs-hero-1.jpg';
import blogs_hero_2 from './blogs-hero/blogs-hero-2.jpg';
import blogs_hero_3 from './blogs-hero/blogs-hero-3.jpg';
import blogs_hero_4 from './blogs-hero/blogs-hero-4.jpg';

export const blogsHeroImages = [blogs_hero_1, blogs_hero_2, blogs_hero_3, blogs_hero_4];


export const categories = [
    { name: "Car Reviews", slug: "car_reviews", image: car_reviews, description: "In-depth reviews of the latest cars" },
    { name: "Car Comparisons", slug: "car_comparisons", image: car_comparisons, description: "Keep your car in top condition" },
    { name: "Maintanance Tips", slug: "maintanance_tips", image: maintanance_tips, description: "Upgrade and customize your ride" },
    { name: "Car Modifications", slug: "car_modifications", image: car_modifications, description: "Drive smarter and safer every day" },
    { name: "Driving Tips", slug: "driving_tips", image: driving_tips, description: "The future of sustainable driving" },
    { name: "New Technology", slug: "new_technology", image: new_technology, description: "Speed, power and pure adrenaline" },
    { name: "EV Vehicles", slug: "ev_vehicles", image: ev_vehicles, description: "Latest tech innovations in automobiles" },
    { name: "Others ", slug: "others", image: others, description: "Everything else about cars" },
];

export const comments = [
  {
    name: "Muneeb Ur Rehman",
    address: "Sahiwal, Pakistan",
    comment: "This article perfectly captures the thrill of the open road! It's rare to find such a detailed, passionate breakdown of the new engineering specs.",
    profilePic: profile_pic
  },
  {
    name: "Reza Al-Hamdan",
    address: "Dubai, UAE",
    comment: "This blog completely changed how I approach my build. Started with suspension first just like you said, night and day difference!",
    profilePic: profile_pic_1
  },
  {
    name: "Sofia Marchetti",
    address: "Milan, Italy",
    comment: "Finally someone explaining the power triangle properly. Most people just throw money at horsepower and wonder why their car feels sketchy.",
    profilePic: profile_pic_2
  },
  {
    name: "James Whitfield",
    address: "Manchester, UK",
    comment: "The ECU tune tip is gold. Did mine before any hardware mods and instantly felt the difference. Highly recommend to anyone starting out.",
    profilePic: profile_pic_3
  },
  {
    name: "Aiko Tanaka",
    address: "Tokyo, Japan",
    comment: "Wide-body kits are an art form here in Japan. Love that you mentioned Rocket Bunny and Pandem, true legends of the scene.",
    profilePic: profile_pic_4
  },
  {
    name: "Carlos Vega",
    address: "Mexico, Mexico",
    comment: "The legal note section saved me. Almost put on a loud exhaust without checking local noise regulations. Close call!",
    profilePic: profile_pic_5
  },
  {
    name: "Lena Becker",
    address: "Munich, Germany",
    comment: "Coming from a country where the Autobahn is real, braking upgrades are not optional. Great that you emphasized this so strongly.",
    profilePic: profile_pic_6
  },
  {
    name: "Omar Farooq",
    address: "Lahore, Pakistan",
    comment: "Been modding cars for 6 years and this is still one of the cleanest beginner guides I have read. Sharing this with my whole garage group.",
    profilePic: profile_pic_7
  },
  {
    name: "Priya Nair",
    address: "Mumbai, India",
    comment: "Never thought about documenting my build until I read this. Just started keeping receipts and a mod log. Thank you for that tip!",
    profilePic: profile_pic_8
  },
]

export default {upload_area, categories, comments, blogsHeroImages};