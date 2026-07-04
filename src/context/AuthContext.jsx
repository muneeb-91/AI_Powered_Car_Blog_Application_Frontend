import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    // States
    const [authUser, setAuthUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [isLoggingIn, setIsLogginIn] = useState(false);
    const [viewUserProfile, setViewUserProfile] = useState(false);

    // Functions
    const checkAuth = async () => {
        try{
            setIsAuthenticating(true);
            const res = await axiosInstance.get('/user/check-auth');
            setAuthUser(res.data);
        }catch(error){
            setAuthUser(null);
            console.log(error.response?.data?.message || error.message);
        }finally{
            setIsAuthenticating(false);
        }
    } 

    const login = async (formData) => {
        try{
            setIsLogginIn(true);
            const res = await axiosInstance.post('/user/login', formData);
            setAuthUser(res.data.user);
            toast.success(res.data.message || "Login Successful");
        }
        catch(error){
            toast.error(error.response?.data?.error);
        }finally{
            setIsLogginIn(false);
        }
    }

    const register = async (formData) =>{
        try{
            setIsSigningUp(true);
            const res = await axiosInstance.post('/user/register', formData);
            setAuthUser(res.data.user);
            toast.success(res.data.message || "User Registered");
        }catch(error){
            toast.error(error.response?.data?.error);
        }finally{
            setIsSigningUp(false);
        }
    }

    const logout = async () => {
        try{
            setViewUserProfile(false)
            const res = await axiosInstance.post('/user/logout');
            setAuthUser(null);
            toast.success(res.data.message || "Logged out!");
        }catch(error){
            toast.error(error.response?.data?.error);
        }
    }

    return(
        <AuthContext.Provider
            value={{authUser, isAuthenticating, isLoggingIn, isSigningUp, viewUserProfile, setViewUserProfile, checkAuth, login, register, navigate, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}



