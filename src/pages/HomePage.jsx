import React from 'react';
import Hero from '../components/Hero';
import NewTechnology from '../components/NewTechnology';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HomeBlogs from '../components/HomeBlogs';

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeBlogs/>
      <Categories from={0} to={4}/>
      <hr className="border border-gray-300 my-8 mx-16" />
      <NewTechnology/>
      <Testimonials/>
      <Categories from={4} to={8}/>
      <Footer/>
    </div>
  )
}

export default Home