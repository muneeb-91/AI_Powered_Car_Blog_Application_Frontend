import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-primary max-w-7xl px-4 md:px-6 lg:px-8 py-4'>
      <div className='w-full bg-primary flex items-center justify-between text-white mb-6'>
        <div className='text-2xl font-bold'><Link to='/'>Drive<span className='text-accent'>line</span></Link></div>
        <div className='sm:flex hidden items-center justify-center font-medium gap-6'>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/about'>About Us</Link>
          <Link to='mailto:driveline@gmail.com'>Contact Us</Link>
        </div>
      </div>

      <div className='bg-secondary px-6 sm:px-10 md:px-14 py-8 md:py-14 text-white w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-0'>Subscribe to our news letter to get latest updates and news</h1>
          <div className='flex items-center justify-start gap-2 flex-wrap sm:flex-nowrap'>
            <input type='email' className='flex-1 p-3 border border-gray-500 rounded-lg placeholder:text-gray-400 bg-white text-primary' placeholder='example@gmail.com'/>
            <button className='flex items-center justify-center gap-2 bg-accent rounded-lg py-3 px-4 sm:px-10 sm:py-3 cursor-pointer font-medium'>Subscribe <Send size={16}/> </button>
          </div>
        </div>
      </div>

      <div className='bg-primary w-full text-gray-100 pt-6'>
        <p className='text-sm font-medium sm:text-start text-center sm:mb-0 mb-3'>
          NYC 07008, USA
        </p>
        <div className='flex items-center sm:justify-between justify-center flex-wrap sm:flex-nowrap gap-4'>
          <span className='text-sm font-medium'>example@gmail.com &nbsp;|&nbsp; 0192 12346789</span>
          <span className='flex items-center justify-between md:gap-5 gap-3'>
            <FaFacebook className='size-5' />
            <AiFillTwitterCircle className='size-6' />
            <span className='bg-white p-1 rounded-full'>
              <BsInstagram className='text-primary size-3' strokeWidth={0.3}/>
            </span>
            <span className='bg-white p-1 rounded-full'>
              <FaLinkedinIn className='text-primary size-3' />
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer