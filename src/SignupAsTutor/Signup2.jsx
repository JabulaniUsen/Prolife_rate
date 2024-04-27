import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { registerTutorAction } from '../Redux/actions/Auth';
import { toast } from 'react-toastify';
import { clearSignUpStatus } from '../Redux/reducers/authReducer';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import Footer2 from '../Components/Footer2';
import {UseSessionContext} from '../context/createContext/useSession';
import {Signup} from '../api/signup';

function Signup2() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [created, setCreated] = useState(false)
  const {session} = useContext(UseSessionContext)
 const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      Signup(values).then((response) => {
        if(response.status===200) {
          setCreated(true)
        }
        else {
          toast.error(response.message??"Unable to process your credentials")
        }
      })
    },
    
  });

  useEffect(() => {
    if (session && session?.authentication?.error) {
      toast.error(`Unable to complete your registration}`);
    }

  }, [session?.authentication?.error]);

  useEffect(() => {
    if (created) {
      toast.success('Account created', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate('/signin', { state: { first_name: formik.values.full_name, email: formik.values.email } });
        
      }, 3000);
    }
  }, [created, formik.values.full_name, formik.values.email, navigate]);
  
  return (
    <div>
      <Header />
      <div className="px-5 lg:px-28 my-16">
        <div className="poppins header text-center">
          <h1 className="lg:text-3xl text-2xl font-bold">Have Skills? Share them</h1>
        </div>
        <div className="poppins m-auto flex flex-col items-center justify-center my-10">
          <div className="form flex flex-col gap-2">
            <div className="">
              <p className="text-[#186BAD] text-sm my-1 font-semibold">Full Name</p>
              <input
                type="text"
                name="full_name"
                placeholder="First Name"
                className={`bg-[#f2f1f1]  border p-3 lg:w-[697px] w-[300px] outline-none rounded-sm`}
                {...formik.getFieldProps('full_name')}
                required
              />
              {formik.touched.full_name && formik.errors.full_name && (
                <div className="text-red-500 text-sm">{formik.errors.full_name}</div>
              )}
            </div>

            <div className="mb-3 ">
              <p className="text-[#186BAD] text-sm font-semibold">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`bg-[#f2f1f1]  p-3 border lg:w-[697px] w-[300px] outline-none rounded-sm`}
                {...formik.getFieldProps('email')}
                required
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>

            {/* Passwords */}
            <div className="mb-3">
              <div className="relative ">
                <p className="text-[#186BAD] text-sm font-semibold">Password</p>
                <input
                  type={formik.values.passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password..."
                  className={`bg-[#f2f1f1]  p-3 lg: border lg:w-[697px] w-[300px] outline-none rounded-sm`}
                  {...formik.getFieldProps('password')}
                  required
                />
                <button
                  type="button"
                  className="absolute top-2/3 right-4 transform -translate-y-1/2"
                  onClick={() => formik.setFieldValue('passwordVisible', !formik.values.passwordVisible)}
                >
                  <FontAwesomeIcon icon={formik.values.passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
            </div>

            <div className="mb-3">
              <div className="relative ">
                <p className="text-[#186BAD] text-sm font-semibold">Confirm Password</p>
                <input
                  type={formik.values.passwordVisible ? 'text' : 'password'}
                  name="password2"
                  placeholder="Confirm Password"
                  className={`bg-[#f2f1f1]  p-3 lg: border lg:w-[697px] w-[300px] outline-none rounded-sm `}
                  {...formik.getFieldProps('password2')}
                  required
                />
                <button
                  type="button"
                  className="absolute top-2/3 right-4 transform -translate-y-1/2"
                  onClick={() => formik.setFieldValue('passwordVisible', !formik.values.passwordVisible)}
                >
                  <FontAwesomeIcon icon={formik.values.passwordVisible ? faEyeSlash : faEye} />
                </button>
              </div>
              {formik.touched.password2 && formik.errors.password2 && (
                <div className="text-red-500 text-sm">{formik.errors.password2}</div>
              )}
            </div>
            <div className="">
              <button
                className="float-right poppins cursor-pointer text-lg font-semibold transition-all mt-9 hover:bg-[#186BAD] hover:text-white px-5 py-2 rounded-lg"
                onClick={formik.handleSubmit}
              >
                Next <FontAwesomeIcon icon={faChevronRight} className="text-xl font-bold ml-5" />
              </button>
              <div className="">
                <p className='lg:text-base text-sm '>Have an account? <Link className='text-[#186bad]'>Log in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup2;
