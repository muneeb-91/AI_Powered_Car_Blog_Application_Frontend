import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleUser, User, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const {register, isSigningUp} = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  
    const validateForm = () => {
    if(!formData.name.trim()) return toast.error("Full Name is required");
    if(!formData.email.trim()) return toast.error("Email is Required");
    if(!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid Email Fromat");
    if(!formData.password) return toast.error("Password is required");
    if(!formData.confirm_password) return toast.error("Please confirm the password");
    if(formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if(success === true) register(formData);
  }
  
  return (
          <div className='bg-secondary min-h-screen w-full py-4'>
            <div className='flex flex-col items-center justify-center gap-y-4 px-3 py-8'>

              {/* Create Account Heading */}
              <div className='flex flex-col items-center justify-center gap-y-2 mb-4'>
                <div className='bg-accent rounded-full size-14 flex items-center justify-center'>
                  <CircleUser className='size-8 text-gray-700/90'/>
                </div>
                <h2 className='text-surface text-3xl font-bold'>Create Account</h2>
                <p className='text-gray-300 backdrop-opacity-75'>Unlock the best user experience</p>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className='bg-primary w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] rounded-2xl py-6 px-4'>
                  <div className='p-6 flex flex-col justify-center gap-y-6'>

                    <div className='flex flex-col gap-y-1'>
                      <label className='text-gray-200 font-semibold'>Full Name</label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                          <User className='size-5 text-gray-300'/>
                        </div>
                        <input type='text' autoFocus placeholder='John Doe' className='w-full p-3 rounded-md bg-secondary text-gray-300 placeholder:text-gray-500 outline-none border border-transparent focus:border-gray-300 pl-10' value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
                      </div>
                    </div>

                    <div className='flex flex-col gap-y-1'>
                      <label className='text-gray-200 font-semibold'>Email</label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                          <Mail className='size-5 text-gray-300'/>
                        </div>
                        <input type='email' placeholder='user@example.com' className='w-full p-3 rounded-md bg-secondary text-gray-300 placeholder:text-gray-500 outline-none border border-transparent focus:border-gray-300 pl-10' value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
                      </div>
                    </div>  

                    <div className='flex flex-col gap-y-1'>
                      <label className='text-gray-200 font-semibold'>Password</label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                          <Lock className='size-5 text-gray-300'/>
                        </div>
                        <input type={showPassword ? 'text' : 'password'} placeholder='••••••••' className='w-full p-3 rounded-md bg-secondary text-gray-300 placeholder:text-gray-500 outline-none border border-transparent focus:border-gray-300 pl-10 pr-10' value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
                        <button type='button' className='text-gray-300 absolute inset-y-0 right-0 pr-3 cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>
                          {showPassword ?
                            <EyeOff className='size-5' /> : <Eye className='size-5' />
                          }
                        </button>
                      </div>
                    </div>

                    <div className='flex flex-col gap-y-1'>
                      <label className='text-gray-200 font-semibold'>Confirm Password</label>
                      <div className='relative'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                          <Lock className='size-5 text-gray-300'/>
                        </div>
                        <input type={showConfirmPassword ? 'text' : 'password'} placeholder='••••••••' className='w-full p-3 rounded-md bg-secondary text-gray-300 placeholder:text-gray-500 outline-none border border-transparent focus:border-gray-300 pl-10 pr-10' value={formData.confirm_password} onChange={(e)=>setFormData({...formData, confirm_password:e.target.value})}/>
                        <button type='button' className='text-gray-300 absolute inset-y-0 right-0 pr-3 cursor-pointer' onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ?
                            <EyeOff className='size-5' /> : <Eye className='size-5' />
                          }
                        </button>
                      </div>
                    </div>

                    <button type='submit' className='w-full py-3 text-center text-secondary bg-accent rounded-md mt-3 font-medium cursor-pointer flex items-center justify-center gap-2' disabled={isSigningUp}>
                      {isSigningUp ? (
                        <>
                          <Loader2 className='size-5 animate-spin'/>
                          Loading...
                        </>
                      ) : (
                        'Register'
                        )
                      }
                    </button>

                    <p className='text-gray-300 text-center'>
                      Don't have an account? <Link to='/login'>Signin</Link>
                    </p>

                  </div>
              </form>

            </div>
          </div>
  )
}

export default Register;