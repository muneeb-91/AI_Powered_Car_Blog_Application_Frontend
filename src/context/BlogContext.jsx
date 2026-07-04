import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // useStates
  const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [newTechnologyBlogs, setNewTechnologyBlogs] = useState([]);
  const [blogsByCategory, setBlogsByCategory] = useState([]);

  // Functions
  const createBlog = async (data, onSuccess) => {
    try {
      const res = await axiosInstance.post("/blog/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setBlogs((prev) => [...prev, res.data.blog]);
      toast.success("Blog created Successfully" || res.data?.message);
      onSuccess();
    } catch (error) {
      console.log("Full error:", error);        // ← poora error dekho
      console.log("Message:", error.message);   // ← message dekho
      toast.error(error.response?.data?.error || "Failed to publish blog");
      return false;
    }
  };

  const getSingleBlog = async (id) => {
    try {
      const res = await axiosInstance.get(`/blog/${id}`);
      return res;
    } catch (error) {
      toast.error(error.response?.data?.error);
    }
  };

  const getMyBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blog/my-blogs");
      setMyBlogs(res.data.blogs);
    } catch (error) {
      console.log(error.response?.data?.error || error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const res = await axiosInstance.delete(`/blog/${id}`);
      const filteredBlogs = myBlogs.filter((blog) => blog._id !== id);
      setMyBlogs(filteredBlogs);
      toast.success(res.data.message);
    } catch(error){
      toast.error(error.response?.data?.error);
    }
  };

  const getLatestBlog = async () => {
    try {
      const res = await axiosInstance.get("/blog/latest-blog");
      setLatestBlog(res.data.blog);
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };

  const getTrendingBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blog/trending");
      setTrendingBlogs(res.data?.blogs);
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };

  const getNewTechnologyBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blog/new-technology");
      setNewTechnologyBlogs(res.data?.blogs);
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };

  const getBlogsByCategory = async (category) => {
    try {
      const res = await axiosInstance.get(`/blog/categorized-blogs/${category}`);
      setBlogsByCategory(res.data.blogs);
    } catch (error) {
      console.log(error.response?.data?.error);
    }
  };

  const generateContent = async (formData) => {
    try {
      const res = await axiosInstance.post(
        "/blog/create/generate-content",
        formData,
      );
      return res;
    } catch(error) {
      toast.error("Generation failed" || error.response?.data?.error);
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        myBlogs,
        latestBlog,
        trendingBlogs,
        newTechnologyBlogs,
        blogsByCategory,
        setBlogs,
        createBlog,
        getSingleBlog,
        getMyBlogs,
        deleteBlog,
        getLatestBlog,
        getTrendingBlogs,
        getNewTechnologyBlogs,
        getBlogsByCategory,
        generateContent,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
