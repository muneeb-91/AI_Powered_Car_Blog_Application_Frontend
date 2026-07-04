import React, { useState } from 'react';
import { HiDocumentText } from "react-icons/hi2";
import { BiSolidEditAlt } from "react-icons/bi";
import PostBlogContainer from '../components/PostBlogContainer';
import ViewMyBlogs from '../components/ViewMyBlogs';

const PostBlogPage = () => {
  const [selectedOption, setSelectedOption] = useState('post');

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="md:min-h-screen w-full bg-secondary">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-primary backdrop-blur-lg border-r border-t border-white/10 py-8 md:sticky top-0 md:h-screen">
          <div
            className={`flex items-center gap-4 px-8 py-5 mx-4 rounded-xl cursor-pointer transition-all duration-300 font-medium ${
              selectedOption === 'post'
                ? 'bg-accent text-white shadow-lg shadow-red-400/30'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
            onClick={() => handleSidebarClick('post')}
          >
            <BiSolidEditAlt className='text-gray-300' size={20} />
            <span>Post Blog</span>
          </div>

          <div
            className={`flex items-center gap-4 px-8 py-5 mx-4 mt-2 rounded-xl cursor-pointer transition-all duration-300 font-medium ${
              selectedOption === 'view'
                ? 'bg-accent text-white shadow-lg shadow-red-400/30'
                : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
            onClick={() => handleSidebarClick('view')}
          >
            <HiDocumentText className='text-gray-300' size={20} />
            <span>See Your Blogs</span>
          </div>
        </aside>

        {/* Content Area */}
        <div className="max-sm:w-full flex-1 p-4 md:p-8 overflow-y-auto">
          {selectedOption === 'post' ? (
            <PostBlogContainer />
          ) : (
            <ViewMyBlogs />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostBlogPage;