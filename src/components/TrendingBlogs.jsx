import { useEffect } from "react";
import { useBlog } from "../context/BlogContext";
import formatTime from "../lib/utils.js"
import { Link } from "react-router-dom";

const TrendingBlogs = () => {
  const { trendingBlogs, getTrendingBlogs } = useBlog();

  useEffect(() => {
    getTrendingBlogs();
  }, []);
  
  if(trendingBlogs?.length === 0) 
  return (
  <div>
    {/* heading */}
      <div className='inline-block'>
        <h1 className='text-2xl md:text-4xl text-black font-medium'>Trending</h1>
        <div className='h-1 w-16 bg-accent mx-auto mt-2'></div>
      </div>
      <p className='text-gray-500 mt-8'>Nothing to show</p>
  </div>
  )

  return (
    <div>
      {/* heading */}
      <div className="flex items-baseline justify-between">
        <div className="inline-block">
          <h1 className="text-2xl md:text-4xl text-black font-medium">
            Trending
          </h1>
          <div className="h-1 w-16 bg-accent mx-auto mt-2"></div>
        </div>
        <button className="text-md font-semibold opacity-80 cursor-pointer">
          see all
        </button>
      </div>

      {/* content */}
      <div className="flex flex-col justify-between min-h-11/12 pt-10 pb-4 overflow-y-hidden">
        {trendingBlogs?.map((blog) => (
          <Link to={`/blog/${blog?._id}`} className="px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 w-full group hover-bg-accent hover:cursor-pointer" key={blog?._id}>
            <div>
              <span className="text-sm text-gray-500 mb-3 group-hover:text-white">
                By{" "}
                <span className="text-accent group-hover:text-white group-hover:font-bold">
                  {blog?.author.name}
                </span>{" "}
                &nbsp;|&nbsp; {formatTime(blog?.createdAt)}
              </span>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-white line-clamp-2">
                {blog?.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
