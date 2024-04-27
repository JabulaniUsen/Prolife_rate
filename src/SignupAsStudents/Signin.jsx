import React, { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import Header from '../Components/Header';
import axios from '../api/axios';
const LOGIN_URL = '/auth/login'


function Signin() {
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errorRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    if (email || password) {
      clearError();
    }
  }, [email, password]);

  const clearError = () => {
    setEmailEmpty(false);
    setPasswordEmpty(false);
    errorRef.current.innerText = '';
  };

  const handleLogin = async (e) => {
    e.preventDefault();

  try {
    const response = await axios.post(LOGIN_URL, 
      JSON.stringify({email, password}),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    );
    console.log(JSON.stringify(response?.data));
    // console.log(JSON.stringify(response));
    const accessToken = response?.data?.accessToken;
    const roles = response?.data?.roles;
    setAuth({ email, password, roles, accessToken})
    setEmail("");
    setPassword("");
    toast.success("Account created");
  } catch (err) {
    console.error("Login error:", err);
    toast.error("An error occurred during login. Please try again later.");
  }

    console.log(email, password)
    clearError();
    
    if (!email || !password) {
      setEmailEmpty(!email);
      setPasswordEmpty(!password);
      errorRef.current.innerText = 'Email and password are required';
      return;
    }

    // Perform login logic here
    // For example, call an API to authenticate user
    // If login successful, navigate to dashboard
    // If login fails, display error message
    // Example:
    // authenticateUser(email, password)
    //   .then(() => {
    //     setShowModal(true); // Set showModal state to true
    //   })
    //   .catch((error) => {
    //     errorRef.current.innerText = error.message || 'An error occurred during login';
    //   });
  };

  return (
    <div>
      <Header />
      <div className="lg:px-28 px-5 my-16">
        <div className="poppins header text-center">
          <h1 className='lg:text-3xl text-2xl'>Hi, Welcome back!</h1>
        </div>
        <p ref={errorRef} className="errmsg offscreen" aria-live='assertive'></p>
        <div className="poppins m-auto flex items-center justify-center py-10">
          <div className='form lg:w-min w-[350px]'>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Email</p>
              <input
                type="email"
                placeholder='Email'
                ref={emailRef}
                className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${emailEmpty ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailEmpty && <p className='text-red-500 text-xs mt-1'>This must not be empty</p>}
            </div>
            <div className='mb-3'>
              <p className='text-[#186BAD] text-sm mb-1 font-semibold'>Password</p>
              <input
                type="password"
                placeholder='Password'
                className={`bg-[#F2F1F1] p-3 lg:w-[400px] w-[300px] outline-none rounded-sm ${passwordEmpty ? 'border-red-500' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordEmpty && <p className='text-red-500 text-xs mt-1'>This must not be empty</p>}
            </div>
            <div className="lg:w-[400px] w-[300px] flex gap-3 items-baseline my-7" >
              <input type="checkbox" name="" id="" required />
              <p className='text-[#186BAD] font-semibold'>Keep me signed in</p>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className={`signup text-white font-semibold py-3 bg-[#186BAD] lg:w-[400px] w-full rounded-lg ${!email || !password ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!email || !password}
            >
              Sign in
            </button>
            <p className='text-[#898A8B] text-center py-5'>Don't have an account? <span className='text-[#186BAD] ml-2'><Link to='/signup'>Sign Up</Link></span></p>
          </div>
        </div>
      </div>

      {/* Signup successful modal */}
      {/* {showModal && (
        <div className="popup-modal">
          <FontAwesomeIcon icon={faCheckCircle} className="text-6xl text-[#186BAD] my-2" />
          <h2 className="text-2xl font-bold">Welcome back, Buddy!</h2>
          <p className="my-3 text-[#186BAD] font-semibold">Proceeding to Dashboard...</p>
        </div>
      )} */}
    </div>
  );
}

export default Signin;
