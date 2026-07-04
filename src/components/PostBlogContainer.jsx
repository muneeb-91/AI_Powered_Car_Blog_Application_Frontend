import { useEffect, useRef, useState } from "react";
import Quill from 'quill';
import assets from "../assets/assets";
import { RxCross2 } from "react-icons/rx";
import { useBlog } from "../context/BlogContext";
import toast from "react-hot-toast";

const PostBlogContainer = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const {createBlog, generateContent} = useBlog();

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if(image) formData.append("image", image);
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("description", description);
    formData.append("category", category);

    createBlog(formData, ()=>{
      setImage(null);
      setTitle('');
      setSubTitle('');
      setCategory('');
      setDescription('');
      quillRef.current.setText("");
    });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      const ratio = img.width / img.height;
      const expected = 16 / 9;
      const tolerance = 0.1;

      if(Math.abs(ratio - expected) > tolerance){
        toast.error("Please select the image with 16:9 ratio (e.g. 1920 x 1080)");
        URL.revokeObjectURL(objectUrl);
        e.target.value = "";
        return;
      }
      setImage(file);
      URL.revokeObjectURL(objectUrl);
    }
    img.src = objectUrl;
  }

  const handleGenerateContent = async () => {
    if(!title || !subTitle || !category){
      toast.error("Please fill title, subtitle, and category first");
      return;
    }
    if(title.length < 30 || subTitle.length < 30){
      toast.error("Title and subtitle should be at least 30 charcters long");
    }

    const formData = {
      title,
      subTitle,
      category,
    }

    try{
      quillRef.current.root.innerHTML = "Generating Content..."
      const res = await generateContent(formData);
      const generatedDescription = res.data?.description;
      quillRef.current.root.innerHTML = ""
      setDescription(generatedDescription);
        if (quillRef.current){
            quillRef.current.root.innerHTML = generatedDescription;
        }
    }catch(error){
      quillRef.current.root.innerHTML = ""
      console.log("Generation Failed:", error);
    }
  }

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'});

      quillRef.current.on("text-change", () => {
        const html = quillRef.current.root.innerHTML;
        setDescription(html);
      })
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">
        Create New Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="bg-primary backdrop-blur-lg px-4 py-6 md:p-10 max-w-2xl rounded-2xl border border-white/10">
        <div className="mb-8">
          <label
            htmlFor="image"
            className="block text-slate-200 font-semibold mb-2"
          >
            Featured Image
          </label>

          <label>
            <div className="h-30 w-45 relative">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} className="border border-white/30 rounded-lg h-30 w-45 object-cover" /> 
              {image && <RxCross2 size={20} strokeWidth={1} onClick={(e)=>setImage(null)} className="cursor-pointer text-primary bg-gray-200 absolute p-1 -top-2 -right-2 rounded-full"/>}
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden required/>
          </label>
        </div>

        <div className="mb-8">
          <label
            htmlFor="title"
            className="block text-gray-200 font-semibold mb-2"
          >
            Blog Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter your blog title"
            className="w-full px-4 py-3 max-w-xl border bg-secondary border-white/50 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="subTitle"
            className="block text-gray-200 font-semibold mb-2"
          >
            Subtitle
          </label>
          <input
            type="text"
            value={subTitle}
            onChange={(e)=>setSubTitle(e.target.value)}
            placeholder="Enter the Subtitle"
            className="w-full px-4 py-3 max-w-xl border bg-secondary border-white/50 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="category"
            className="block text-gray-200 font-semibold mb-2"
          >
            Category
          </label>
          <select
            onChange={(e)=>setCategory(e.target.value)} value={category}
            className="w-full px-4 py-3 max-w-xl bg-secondary border border-white/50 rounded-xl text-gray-300 focus:outline-non"
          >
            <option value="" className="">
              Select a category
            </option>
            <option value="car_reviews" className="">
              Car Reviews
            </option>
            <option value="car_comparisons" className="">
              Car Comparisons
            </option>
            <option value="maintanance_tips" className="">
              Maintainance Tips
            </option>
            <option value="car_modifications" className="">
              Car Modifications
            </option>
            <option value="driving_tips" className="">
              Driving Tips
            </option>
            <option value="new_technology" className="">
              New Technology
            </option>
            <option value="ev_vehicles" className="">
              EV Vehicles
            </option>
            <option value="others" className="">
              Others
            </option>
          </select>
        </div>

        <div className="mb-8">
          <label
            htmlFor="description"
            className="block text-gray-200 font-semibold mb-2"
          >
            Blog Description
          </label>

          <div className="max-w-xl border border-white/20 relative bg-secondary">
            <div ref={editorRef} value={description} className="min-h-72 max-h-80 w-full overflow-y-auto text-gray-200"></div>
            <button type='button' onClick={handleGenerateContent} className="border border-white/20 rounded-lg bg-primary py-1 px-2 text-gray-300 absolute bottom-2 right-2 hover:cursor-pointer hover:opacity-80">Generate with AI</button>
          </div>
        </div>

        <div className="w-full flex items-baseline justify-end">
          <button
            type="submit"
            className="max-sm:text-sm px-4 py-3 md:px-8 bg-accent text-white rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-400/40 transition-all duration-300 cursor-pointer"
          >
            Publish Blog
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default PostBlogContainer;
