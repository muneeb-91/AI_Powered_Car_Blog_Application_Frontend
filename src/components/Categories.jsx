import { Link } from 'react-router-dom';
import { categories } from "../assets/assets.js";
import { ArrowRight } from 'lucide-react';

const Categories = ({ from, to }) => {
  const slicedCategories = categories.slice(from, to);

  return (
    <div className="max-w-7xl px-4 md:px-6 lg:px-8 py-4 mb-8">
      {/* heading */}
      <div className="inline-block mb-12">
        <h1 className="text-2xl md:text-4xl text-black font-medium">
          Categories
        </h1>
        <div className="bg-accent h-1 w-16 mx-auto mt-2"></div>
      </div>

      {/* Category Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-8 mb-5">
        {slicedCategories?.map((category, index) => (
          <Link className="bg-gray-100 rounded-md p-3 flex flex-col items-center justify-center text-center gap-3 group hover-bg-secondary hover:-translate-y-1.5 hover:scale-105 transition-all duration-500" key={index} to={`/blogs/${category?.slug}`}>
            <div className="">
              <img
                src={category?.image}
                alt=""
                className="size-20 rounded-full"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-gray-900 font-semibold group-hover:text-white">
                {category?.name}
              </h1>
              <ArrowRight
                size={14}
                className="group-hover:text-white"
                strokeWidth={3}
              />
            </div>
            <p className="text-gray-500 text-sm group-hover:text-white">
              {category?.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
