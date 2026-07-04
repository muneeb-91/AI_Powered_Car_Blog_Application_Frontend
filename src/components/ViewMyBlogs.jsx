import { useEffect } from "react";
import { useBlog } from "../context/BlogContext";
import fromatTime from "../lib/utils.js";
import { Link } from "react-router-dom";

const ViewMyBlogs = () => {
  const { myBlogs, getMyBlogs, deleteBlog } = useBlog();

  useEffect(() => {
    getMyBlogs();
  }, [getMyBlogs]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Your Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myBlogs.map((blog) => (
          <Link to={`/blog/${blog?._id}`} target="blank" key={blog?._id}>
            {/* Sample Blog Card 1 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 hover:border-red-400/30 transition-all duration-300">
              <div className="min-w-52 relative">
                <img
                  src={blog?.image}
                  alt="Blog"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 absolute top-2 right-2">
                  {blog?.category.replace("_", " ").toUpperCase()}
                </span>
              </div>
              <div className="p-3 flex flex-col gap-y-2">
                <h3 className="text-white text-xl font-bold line-clamp-2">
                  {blog?.title}
                </h3>
                <p className="text-slate-300 leading-relaxed line-clamp-2">
                  {blog?.subTitle}
                </p>
                <span className="text-surface font-medium text-sm">
                  {fromatTime(blog?.createdAt)}
                </span>
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-white/10">
                  <div className="flex gap-3">
                    <button
                    onClick={(e) =>{
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                    className="px-5 py-2 bg-primary border border-blue-200/30 text-gray-200 rounded-lg font-semibold hover:opacity-80 transition-all duration-300 text-sm hover:cursor-pointer">
                      Edit
                    </button>
                    <button 
                    onClick={(e) =>{
                      e.stopPropagation();
                      e.preventDefault();
                      deleteBlog(blog?._id);
                    }}
                    className="px-5 py-2 bg-accent text-gray-200 border border-gray-600 rounded-lg font-semibold hover:opacity-80 transition-all duration-300 text-sm cursor-pointer">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ViewMyBlogs;
