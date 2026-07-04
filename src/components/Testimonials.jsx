import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { comments } from '../assets/assets';

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? comments.length - 1 : prev-1));
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comments.length - 1 ? 0 : prev+1));
  }

  return (
    <div className='max-w-7xl px-2 md:px-6 lg:px-8 py-16 bg-primary text-white mb-8'>
      <div className='px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] w-full'>
        {/* 1st Child */}
        <div className='lg:border-r lg:border-b-0 border-b border-gray-400 mb-8 lg:mb-0 pb-8 lg:pb-0 md:px-8 sm:px-4'>
          <div className='flex flex-col gap-4 lg:mr-12 mr-0'>
            <h2 className='text-xl font-light tracking-widest'>TESTIMONIALS</h2>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold'>What people says about our blog</h1>
            <p>Thousands of car lovers read us every month. Here is what keeps them coming back.</p>
          </div>
        </div>
        {/* 2nd Child */}
        <div className='md:px-8 sm:px-4'>
          <div className='flex flex-col h-full justify-between ml-0 lg:ml-12'>
            <h1 className='text-xl font-semibold mb-8 lg:mb-0'>{comments[currentIndex].comment}</h1>
            <div className='flex items-center justify-between gap-0.5'>
              {/* flex 1st child */}
              <div className='flex items-center justify-start gap-2'>
                <div>
                  <img src={comments[currentIndex].profilePic} alt='' className='size-10 sm:size-12 rounded-full' />
                </div>
                <div>
                  <h2 className='font-bold text-sm sm:text-md'>{comments[currentIndex].name}</h2>
                  <p className='font-light tracking-wide text-sm sm:text-md'>{comments[currentIndex].address}</p>
                </div>
              </div>

              {/* flex 2nd child */}
              <div className='flex items-center justify-center gap-2 pr-2 sm:pr-6 md:pr-8'>
                <button onClick={handlePrevious} className='bg-white p-0.5 sm:p-1 rounded-full text-primary cursor-pointer'><ArrowLeft/></button>
                <button onClick={handleNext} className='bg-accent p-1 sm:p-2 rounded-full text-white cursor-pointer'><ArrowRight/></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials