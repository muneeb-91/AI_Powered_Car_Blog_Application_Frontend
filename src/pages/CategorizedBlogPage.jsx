import { useEffect } from "react";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import { FaCircleUser } from "react-icons/fa6";
import fromatTime from "../lib/utils.js";

const CategorizedBlogPage = () => {
  const { category } = useParams();
  const { blogsByCategory, getBlogsByCategory } = useBlog();
  
  useEffect(() => {
    getBlogsByCategory(category);
  }, []);

  if(blogsByCategory.length === 0)
  return(
    <div>
      <div className="px-4 md:px-6 lg:px-8 py-4 md:py-8">
        <h2 className="text-2xl font-bold text-primary mb-8">
          Blogs for "{category.replace("_", " ").toUpperCase()}"
        </h2>
        <p className='text-gray-500 mt-8 mb-8'>There are no blogs for this category</p>
      </div>
      <Footer/>
    </div>
  )

  return (
    <div>
      <div className="px-4 md:px-6 lg:px-8 py-4 md:py-8">
        <h2 className="text-2xl font-bold text-primary mb-8">
          Blogs for "{category.replace("_", " ").toUpperCase()}"
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 px-2 md:px-4 mb-8">
          {blogsByCategory.map((blog) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-[1.1fr_2fr] gap-2"
              key={blog._id}
            >
              <div className="w-full h-[190px] md:h-[210px] lg:h-[230px] ">
                <img
                  src={blog.image}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-start justify-between gap-4 px-4 h-full">
                <h1 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold line-clamp-1 sm:line-clamp-2">
                  {blog.title}
                </h1>

                <div className="flex items-center justify-start gap-3">
                  <div className='size-11 rounded-full bg-accent flex items-center justify-center'><span className='font-semibold text-xl text-surface'>{blog.author.name[0].toUpperCase()}</span></div>

                  <div className="flex flex-col">
                    <p className="text-gray-900 font-semibold">
                      {blog.author.name}
                    </p>
                    <p className="text-gray-600 font-medium text-sm">
                      {fromatTime(blog.createdAt)} • 3 Min Read
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 line-clamp-2 sm:line-clamp-1 lg:line-clamp-2">
                  {blog.subTitle}
                </p>

                <Link
                  className="cursor-pointer hover:opacity-95 bg-accent text-white px-5 py-2 rounded-md text-sm font-semibold"
                  to={`/blog/${blog._id}`}
                >
                  Read full article...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategorizedBlogPage;
