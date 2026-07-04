import React from 'react'
import { useBlog } from '../context/BlogContext'
import { useEffect } from 'react';
import fromatTime from '../lib/utils';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const {latestBlog, getLatestBlog} = useBlog();

  useEffect(()=>{
    getLatestBlog();
  }, []);

  if(!latestBlog) 
  return (
  <div>
    {/* heading */}
      <div className='inline-block'>
        <h1 className='text-2xl md:text-4xl text-black font-medium'>Latest</h1>
        <div className='h-1 w-16 bg-accent mx-auto mt-2'></div>
      </div>
      <p className='text-gray-500 mt-8'>Nothing to show</p>
  </div>
  )

  return (
        <div className='mb-8 md:mb-0'>
          {/* heading */}
          <div className='inline-block'>
            <h1 className='text-2xl md:text-4xl text-black font-medium'>Latest</h1>
            <div className='h-1 w-16 bg-accent mx-auto mt-2'></div>
          </div>

          {/* content */}
          <div className='pt-10 p-4 sm:p-7'>
            <img src={latestBlog?.image} alt="" className='mb-3' />
            <p className='text-sm text-gray-500 mb-2'>By <span className='text-accent'>{latestBlog?.author.name}</span> &nbsp;|&nbsp; {latestBlog ? fromatTime(latestBlog.createdAt) : ""}</p>
            <h1 className='text-2xl font-semibold opacity-80 mb-2 line-clamp-2'>{latestBlog?.title}</h1>
            <p className='text-gray-600 mb-7 line-clamp-9' dangerouslySetInnerHTML={{ __html: latestBlog?.description }}></p>
            <Link to={`/blog/${latestBlog?._id}`} className='px-5 py-2 rounded-md bg-accent text-white cursor-pointer hover:opacity-95'>Read More</Link>
          </div>
        </div>
  )
}

export default LatestBlogs