import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import AboutPage from './pages/AboutPage';
import BlogItemPage from './pages/BlogItemPage';
import LoginPage from './pages/LoginPage';
import PostBlogPage from './pages/PostBlogPage';
import RegisterPage from './pages/RegisterPage';
import CategorizedBlogPage from './pages/CategorizedBlogPage';
import 'quill/dist/quill.snow.css';
import { useAuth } from './context/AuthContext';
import { Loader2 } from 'lucide-react';
import Loader from './components/Loader';

const App = () => {
  const {checkAuth, authUser, isAuthenticating} = useAuth();

  useEffect(()=>{
    checkAuth();
  }, []);
    
    if(isAuthenticating) return <Loader/>

  return (
    <div className='box-border'>
        <Header className='box-border'/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/blogs' element={<BlogsPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to="/" />} />
          <Route path='/register' element={!authUser ? <RegisterPage/> : <Navigate to="/" />} />
          <Route path='/post-blog' element={authUser ? <PostBlogPage/> : <Navigate to='/login'/>} />
          <Route path='/blogs/:category' element={<CategorizedBlogPage/>} />
          <Route path='/blog/:id' element={<BlogItemPage/>} />
        </Routes>

        <Toaster/>
    </div>
  )
}

export default App