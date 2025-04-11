import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Environment variable USER_PATH:", import.meta.env.VITE_LOGIN_PATH);
      const response = await axios.post(import.meta.env.VITE_LOGIN_PATH, {  
        email, 
        password 
      });
      
      console.log('Login successful:', response);
      toast.success("Login successful!");
     
        localStorage.setItem('token', response.data.token); // Store token in local storage

      navigate('/'); //Redirect after success
    } catch (err) {
      console.error('Login error:', err);
      const message = (err.response && err.response.data && err.response.data.message) || 'Wrong Password, try again.';
      toast.error(message);
    }
  }


    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Login Container */}
          <div className="relative">
            {/* Background Blur Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25"></div>
            
            {/* Main Content */}
            <div className="relative bg-gray-900/90 backdrop-blur-xl p-6 rounded-lg border border-gray-800">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-purple-200 to-pink-100 bg-clip-text text-transparent">
                  Welcome Back
                </h2>
                <p className="text-gray-400 mt-1 text-sm">
                  Sign in to continue to SecondBrain
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      // value={email}
                      name='email'
                      onChange={(e)=>setEmail(e.target.value)}
                      className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                    <input
                      type="password"
                      id="password"
                      // value={password}
                      name='password'
                      onChange={(e)=>setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                      required
                    />
                  </div>
                </div>

                

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full group"
                >
                  
                  <div className="relative w-full p-3 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 rounded-lg text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-200 text-sm">
                    Sign In
                  </div>
                </button>

                {/* Divider */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-gray-900 text-gray-400 text-xs">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {/* Google */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="relative group flex justify-center items-center px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 rounded-lg transition-all duration-200"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-200"></div>
                    <img className="relative h-4 w-4" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                  </motion.button>
                  {/* GitHub */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="relative group flex justify-center items-center px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 rounded-lg transition-all duration-200"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-200"></div>
                    <img className="relative h-4 w-4" src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub logo" />
                  </motion.button>
                  {/* Twitter */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="relative group flex justify-center items-center px-3 py-1.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 rounded-lg transition-all duration-200"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-200"></div>
                    <img className="relative h-4 w-4" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter logo" />
                  </motion.button>
                </div>
              </form>

              
            </div>
          </div>
        </motion.div>
      </div>
    );
};

export default Login;
  