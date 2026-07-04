import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Categories from "../components/Categories";
import fromatTime from "../lib/utils";
import { axiosInstance } from "../lib/axios";
import { useBlog } from "../context/BlogContext";

const BlogsSection = () => {
  const {blogs, setBlogs} = useBlog();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchBlogs = async() => {
      const res = await axiosInstance.get(`/blog?page=${currentPage}&limit=6`);

      setTotalPages(res.data.totalPages);
      setBlogs(res.data.blogs);
    }

    fetchBlogs();
  }, [currentPage]);

  if(blogs?.length === 0)
  return(
    <div className="px-4 md:px-6 lg:px-8 py-4">
      {/* headings */}
      <div className="inline-block">
        <h1 className="text-2xl md:text-4xl text-black font-medium">
          All Posts
        </h1>
        <div className="h-1 w-16 bg-accent mx-auto mt-2"></div>
      </div>
      <hr className="border border-gray-300 my-12 mx-6" />
      <p className='text-gray-500 mt-8 mb-8'>Nothing to show</p>
    </div>
  )

  return (
    <div>
      <div className="px-4 md:px-6 lg:px-8 py-4">
        {/* headings */}
        <div className="inline-block">
          <h1 className="text-2xl md:text-4xl text-black font-medium">
            All Posts
          </h1>
          <div className="h-1 w-16 bg-accent mx-auto mt-2"></div>
        </div>

        <hr className="border border-gray-300 my-12 mx-6" />

        {/* posts */}
        <div className="flex flex-col items-center justify-center gap-10 px-2 md:px-4 mb-8">
          {blogs?.map((blog) => (
            <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_2fr] gap-2" key={blog?._id}>
              <div className="w-full h-[190px] md:h-[210px] lg:h-[230px]">
                <img
                  src={blog?.image}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start justify-between sm:gap-1 gap-4 px-4 h-full">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800   line-clamp-3 sm:line-clamp-2">{blog?.title}</h1>

                <div className="flex items-center justify-start gap-3">
                  <div className='size-11 rounded-full bg-accent flex items-center justify-center'><span className='font-semibold text-xl text-surface'>{blog?.author.name[0].toUpperCase()}</span></div>

                  <div className="flex flex-col">
                    <p className="text-gray-900 font-semibold md:text-md text-sm">{blog?.author.name}</p>
                    <p className="text-gray-600 font-medium md:text-sm text-xs">
                      {fromatTime(blog?.createdAt)} • 3 Min Read
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 line-clamp-2 sm:line-clamp-1 lg:line-clamp-2">{blog.subTitle}</p>

                <Link
                  className="cursor-pointer hover:opacity-95 bg-accent text-white px-5 py-2 rounded-md text-sm font-semibold"
                  to={`/blog/${blog?._id}`}
                >
                  Read full article...
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="w-full flex items-center justify-center gap-2 py-1 mt-16 font-semibold">
          <button onClick={()=>setCurrentPage((prev)=> prev-1)} className={`bg-secondary text-surface px-4 py-2 rounded-md cursor-pointer disabled:opacity-50`} disabled={currentPage===1}>
            Prev
          </button>

          {
            Array.from({length: totalPages}, (_, i) => i+1).map((page) => (
              <button onClick={()=>setCurrentPage(page)} key={page} className={`px-4 py-2 rounded-full text-primary cursor-pointer ${currentPage === page ? 'bg-accent text-surface': 'hover:opacity-60'}`}>
                {page}
              </button>
            ))
          }

          <button onClick={()=>setCurrentPage((prev)=>prev+1)} className={`bg-secondary text-surface px-4 py-2 rounded-md cursor-pointer disabled:opacity-50`} disabled={currentPage===totalPages}>
            Next
          </button>
        </div>
      </div>

      <Categories from={2} to={6}/>
    </div>
  );
};

export default BlogsSection;
