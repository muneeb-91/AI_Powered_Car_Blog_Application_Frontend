import React from 'react'
import TrendingBlogs from './TrendingBlogs'
import LatestBlogs from './LatestBlogs'

const HomeBlogs = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1.7fr_1.3fr] max-w-7xl mb-8 px-4 md:px-6 lg:px-8 py-4 gap-0.5'>
        {/* 1st child of grid */}
        <LatestBlogs />

        {/* 2nd child of grid */}
        <TrendingBlogs />
    </div>
  )
}

export default HomeBlogs