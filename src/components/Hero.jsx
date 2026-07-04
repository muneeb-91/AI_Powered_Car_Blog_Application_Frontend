import React from 'react';
import {Link} from 'react-router-dom';
import { PiPencilSimpleLineFill } from "react-icons/pi";
import heroBG from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div 
        className='relative w-full bg-cover bg-center text-white z-0 mb-8'
        style={{backgroundImage: `url(${heroBG})`, height: '100dvh', backgroundAttachment:'fixed'}}
    >
        {/* Black Background Overlay */}
        <div className='absolute inset-0 bg-black/20 -z-10'></div>
        
        {/* Content */}
        <div className='flex flex-col items-start pt-20 sm:pt-24 md:pt-0  md:justify-center h-full p-4 md:p-6 lg:p-8  gap-8 sm:gap-10 w-full sm:w-3/4 md:w-1/2 lg:w-1/2 text-justify'>
            <div className='text-4xl md:text-5xl lg:text-7xl font-semibold'>
                <h1>Your Journey</h1>
                <h1>Your Car</h1>
                <h1>Your way</h1>
            </div>

            <div className='sm:text-md'>
                <p>From maintenance tips to the latest EV releases, we bring expert insights, honest reviews, and real driving experiences. Whether you're a first-time buyer or a seasoned gearhead, our blog covers fuel efficiency, safety features, comparisons, and industry news, built for car lovers, by car lovers.</p>
            </div>

            <div>
                <Link to='/post-blog' className='bg-accent text-white py-2 px-5 rounded-full font-medium hover:opacity-85 flex items-center justify-cnter gap-2 cursor-pointer'>
                    <span>Post a blog</span>
                    <PiPencilSimpleLineFill className='size-4'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero