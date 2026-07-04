import React from 'react'
import Footer from '../components/Footer';
import about_us from '../assets/about_us.jpg';

const About = () => {
  return (
    <div>
      <div className='max-w-7xl px-4 md:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-6 lg:gap-10 w-full'>
          {/* image side */}
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-full h-[500px] px-2 md:px-6 py-3'>
              <img src={about_us} alt='' className='h-full w-full object-cover object-center rounded-lg' />
            </div>
          </div>

          {/* text side */}
          <div className='py-4 px-2'>
            <div className='inline-block mb-8'>
              <h1 className='text-2xl md:text-4xl font-medium'>About Us</h1>
              <div className='h-1 w-16 bg-accent mx-auto mt-2'></div>
            </div>

            <p className='text-gray-600 mb-3'>Welcome to DriveLine! where passion meets the pavement. We're not just another car blog; we're a community of drivers, mechanics, and automotive enthusiasts who believe every journey deserves a great story.</p>

            <p className='text-gray-600 mb-3'>Founded in 2024, DriveLine was born from a simple idea: car culture should be accessible, honest, and exciting for everyone. Whether you're a first time buyer nervous about your first sedan, a weekend wrench turner modifying your project car, or an EV early adopter embracing the future, we've got something for you. Our team tests, researches, and debates so you don't have to make costly mistakes.</p>

            <p className='text-gray-600 mb-3'>We don't do fluff or paid reviews. Every comparison, maintenance guide, and tech deep dive comes from real world experience and a genuine love for automobiles.
            So buckle up. Read. Learn. Share. And remember, the road is yours. We're just here to help you enjoy it better.</p>
            <p className='text-gray-600 mb-3 font-bold text-xl'>Drive smart. Drive bold. DriveLine</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About