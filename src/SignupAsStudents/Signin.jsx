import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../Components/Header';
import studentSignin from '../Assets/studentSignin.svg';
import facebook from '../Assets/facebook.svg';
import google from '../Assets/google.svg';
import linkedin from '../Assets/linkedin.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='poppins'>
      <Header />

      <div className="flex items-center justify-center gap-[10rem] bg-[#f2f9ff] lg:h-auto h-[100vh]">
        <div className="img bg-[#0284fb] ml-[-200px] w-[600px] lg:block hidden">
          <img src={studentSignin} alt="" />
        </div>
        <div className="">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className='flex flex-col justify-center gap-6'>
              <div className="email flex flex-col gap-2 lg:w-[400px] w-[300px]">
                <label htmlFor="email" className='font-semibold text-base'>Email Address</label>
                <div className="border border-gray-300 bg-white p-3 rounded-lg">
                  <Field
                    type="email"
                    name="email"
                    placeholder='Enter your Email Address'
                    className=' w-full'
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="password flex flex-col gap-2 lg:w-[400px] w-[300px] relative">
                <label htmlFor="password" className='font-semibold text-base'>Password</label>
                <div className="border border-gray-300 bg-white p-3 rounded-lg flex items-center">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder='Enter your Password'
                    className=' w-full'
                  />
                  <button
                    type="button"
                    className=" text-gray-400 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

              <div className="buttons m-auto">
                <div className="flex items-center justify-center gap-2">
                  <button type="submit" className='font-semibold text-white py-2 px-4 bg-[#186bad] hover:bg-[#0e3e66] rounded-lg'>Login</button>
                  <button className='font-semibold text-white py-2 px-4 bg-[#DE4B18] hover:bg-[#9b4326] rounded-lg'>Register</button>
                </div>
                <button className='text-[#969696] underline mt-2 text-center'>Forgotten Password?</button>
              </div>

              <div className="signInWithSocials m-auto mt-10">
                <p className='font-semibold text-center mb-2'>Sign in with</p>
                <div className="flex items-center justify-center gap-10">
                  <img src={facebook} alt="" />
                  <img src={google} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signin;
