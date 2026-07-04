import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import { useBlog } from '../context/BlogContext';
import { useEffect, useState } from 'react';
import formatTime from '../lib/utils.js';
import { FaCircleUser } from "react-icons/fa6";


const BlogItemPage = () => {
    const [singleBlog, setSingleBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    const {getSingleBlog} = useBlog();

    useEffect(() => {
        const fetchBlog = async () => {
            try{
                setLoading(true);
                const res = await getSingleBlog(id);
                setSingleBlog(res.data.blog);
            }catch(error){
                console.log("Failed to fetch blog", error);
            }finally{
                setLoading(false);
            }
        }

        if(id){
            fetchBlog();
        }
    }, [id, getSingleBlog])

    if(loading){
        return(
            <div className='flex items-center justify-center'>
                <p className='text-gray-600'>Loading Blog Post...</p>
            </div>
        )
    }


  return (
    <div>
        <div className='max-w-7xl px-4 md:px-6 lg:px-8 py-2 mb-5'>
            {/* blog picture */}
            <div className='w-full sm:h-[350px] md:h-[400px] lg:h-[550px] mb-8'>
                <img src={singleBlog?.image} alt='' className='w-full h-full object-cover object-center'/>
            </div>

            <div className='flex flex-col gap-6'>
                {/* heading */}
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>{singleBlog?.title}</h1>
                <h2 className='text-md md:text-xl text-gray-800 lg:text-2xl font-medium'>{singleBlog?.title}</h2>

                {/* publisher */}
                <div className='flex items-start justify-start gap-2'>
                    <FaCircleUser className='size-12 text-accent'/>

                    <div className='flex flex-col'>
                        <p className='text-black font-semibold'>{singleBlog?.author.name}</p>
                        <p className='text-gray-600 text-sm font-medium'>{ singleBlog?.createdAt ? formatTime(singleBlog?.createdAt) : ''} • 3 Min Read</p>
                    </div>

                </div>

                {/* body */}
                <div className='px-4 md:px-8 lg:px-16 flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <div dangerouslySetInnerHTML={{ __html: singleBlog?.description }}/>
                    </div>
                </div>
            </div>    
        </div>
        <Categories from={2} to={6}/>
        <Footer/>
    </div>
    
  )
}

export default BlogItemPage