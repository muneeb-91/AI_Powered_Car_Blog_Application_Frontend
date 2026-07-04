import {Link} from 'react-router-dom';
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { blogsHeroImages } from '../assets/assets';

const BlogsHero = () => {
  return (
    <div 
        className='relative w-full bg-cover bg-center bg-fixed bg-secondary lg:h-dvh text-white z-0 mb-8 py-12 lg:py-0'
    >
        
        {/* Content */}
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            {/* 1st div */}
            <div className='flex flex-col items-start justify-center h-full p-4 md:p-6 lg:p-8 gap-6 text-justify w-full sm:w-3/4 lg:w-full'>
                <div className='text-4xl md:text-5xl lg:text-7xl font-semibold mb-2'>
                    <h1>Your Journey</h1>
                    <h1>Your Car</h1>
                    <h1>Your way</h1>
                </div>

                <div className='sm:text-md mb-6'>
                    <p>From maintenance tips to the latest EV releases, we bring expert insights, honest reviews, and real driving experiences. Whether you're a first-time buyer or a seasoned gearhead, our blog covers fuel efficiency, safety features, comparisons, and industry news, built for car lovers, by car lovers.</p>
                </div>

                <div>
                    <Link to='/post-blog' className='bg-accent text-white py-2 px-5 rounded-full font-medium hover:opacity-85 flex items-center justify-cnter gap-2 cursor-pointer'>
                        <span>Post a blog</span>
                        <PiPencilSimpleLineFill className='size-4'/>
                    </Link>
                </div>
            </div>

            {/* 2nd div */}
           <div className='hidden lg:flex w-full items-center lg:h-full'>
            <div className="relative w-full max-w-full my-auto lg:aspect-16/10">
                <img 
                    src={blogsHeroImages[0]}
                    className="absolute top-[5%] left-[15%] w-[25%] rounded-lg"
                />

                <img 
                    src={blogsHeroImages[1]}
                    className="absolute top-[50%] left-[28%] w-[25%] rounded-lg"
                />

                <img 
                    src={blogsHeroImages[2]}
                    className="absolute top-[40%] left-[57%] w-[25%] rounded-lg"
                />

                <img 
                    src={blogsHeroImages[3]}
                    className="absolute top-[0%] left-[44%] w-[25%] rounded-lg"
                />
            </div>
           </div>
        </div>    
    </div>
  )
}

export default BlogsHero