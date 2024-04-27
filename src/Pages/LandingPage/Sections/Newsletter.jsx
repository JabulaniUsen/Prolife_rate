import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { newsletterAction } from '../../../Redux/actions/Auth';
import { clearNewsletterStatus } from '../../../Redux/reducers/authReducer';


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authenticationSlice);

  useEffect(() => {
    if (authSelector.newsletterActionStatus === 'failed') {
      toast.error(`${authSelector.newsletterActionError}`);
      dispatch (clearNewsletterAction())
      return;
    }
  }, [authSelector.newsletterActionStatus]);

  useEffect(() => {
    if (authSelector.newsletterActionStatus === 'completed') {
      toast.success('Your email has been submitted!', {
        position: 'top-right', // Set the position to 'top-right' or 'top-left'
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch (clearNewsletterAction())
    } 
  }, [authSelector.newsletterActionStatus]);


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      newsletterAction({
        email: email
      })
    );
    // Reset the email input
    setEmail('');
  };

  return (
    <div className='poppins px-5 lg:px-28 my-28 flex justify-center items-center relative'>
      <div className="side1"></div>
      <div className="side2 flex flex-col justify-center items-center gap-9">
        <h1 className='text-[#186bad] lg:text-4xl text-2xl font-bold text-center'>
          Subscribe For Get Update <br />
          Every New Courses
        </h1>
        <p className='text-sm lg:w-initial w-[70%]'>20k+ students daily learn with Proliferate. Subscribe for new courses.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex bg-white my-5 px-2 py-1 lg:w-[450px] w-[350px] gap-4 text-black rounded-lg shadow-lg">
            <input
              type="email"
              className='bg-transparent outline-none pl-4'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className='bg-[#186bad] lg:px-10 lg:py-4 px-5 py-2 border-none rounded-lg text-white lg:ml-[2.8rem] ml-[-0.9rem]'
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="side3"></div>
      <ToastContainer />

      <FontAwesomeIcon icon={faSquareCheck} className='hidden' />
    </div>
  );
};

export default Newsletter;
