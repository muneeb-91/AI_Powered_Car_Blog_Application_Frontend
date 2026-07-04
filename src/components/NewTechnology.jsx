import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import formatTime from "../lib/utils.js"

const NewTechnology = () => {
  const { getNewTechnologyBlogs, newTechnologyBlogs } = useBlog();

  useEffect(() => {
    getNewTechnologyBlogs();
  }, []);

  if(newTechnologyBlogs?.length === 0) 
  return (
  <div>
    <div className="max-w-7xl px-4 md:px-6 lg:px-8 py-4 mb-12">
      {/* heading */}
        <div className="inline-block">
          <h1 className="text-2xl md:text-4xl text-black font-medium">
            New Technology
          </h1>
          <div className="h-1 w-16 mx-auto bg-accent mt-2"></div>
        </div>
      <p className='text-gray-500 mt-8 mb-8'>Nothing to show</p>
    </div>
  </div>
  )

  return (
    <div className="max-w-7xl px-4 md:px-6 lg:px-8 py-4 mb-12">
      {/* heading */}
      <div className="flex items-baseline justify-between px-2 w-full mb-12">
        <div className="inline-block">
          <h1 className="text-2xl md:text-4xl text-black font-medium">
            New Technology
          </h1>
          <div className="h-1 w-16 mx-auto bg-accent mt-2"></div>
        </div>

        <div className="text-md font-semibold opacity-80 cursor-pointer">
          see all
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-8 sm:px-6 px-4 gap-3">
        {newTechnologyBlogs?.map((blog) => (
          <Link className="bg-gray-100 rounded-md p-3 flex flex-col items-center gap-3 group hover:-translate-y-1.5 hover:scale-105 hover-bg-secondary transition-all duration-500 hover:shadow-2xl shadow-gray-400 mb-1 hover:cursor-pointer" key={blog?._id} to={`/blog/${blog?._id}`}>
            <div className="rounded-md w-full h-36">
              <img
                src={blog?.image}
                alt="blog_image"
                className="w-full rounded-md h-full object-cover object-center"
              />
            </div>
            <h1 className="text-md text-gray-800 font-semibold line-clamp-2 group-hover:text-white">
              {blog?.title}
            </h1>
            <div className="flex items-center justify-start text-sm gap-3 w-full">
              <div className="rounded-full size-12">
                <div className='size-11 rounded-full bg-accent flex items-center justify-center'><span className='font-semibold text-xl text-surface'>{blog?.author.name[0].toUpperCase()}</span></div>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-900 font-semibold group-hover:text-white">
                  {blog?.author.name}
                </p>
                <p className="text-gray-600 text-xs font-medium group-hover:text-white">
                  {formatTime(blog?.createdAt)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewTechnology;
