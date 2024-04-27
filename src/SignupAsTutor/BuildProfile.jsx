import React from 'react';
import Header from '../Components/Header';
import dnd from '../Assets/dnd.png';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer2 from '../Components/Footer2';

const BuildProfile = () => {
  const maxCharacters = 500;

  const validationSchema = Yup.object().shape({
    bio: Yup.string().max(maxCharacters, 'Bio must be at most 500 characters').required('Bio is required'),
    subject: Yup.array().required('Subjects are required'),
    grade: Yup.array().required('Grades are required'),
  });

  const formik = useFormik({
    initialValues: {
      bio: '',
      subject: [],
      grade: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log('Form submitted with values:', values);
      // Add your logic to send the form data to the server or perform other actions
    },
  });

  return (
    <div>
      <Header />
      <div className="py-20">
        <div className="poppins header text-center mb-10">
          <h1 className="lg:text-3xl text-2xl font-bold text-[#186BAD]">
            Build your Tutor Profile
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center gap-3">
          <div className="file border-dotted border-gray-400 border-4 lg:w-[600px] px-[6rem] lg:h-[230px] flex justify-center items-center">
            <input style={{ display: 'none' }} id="file" type="file" />
            <label htmlFor="file">
              <div className="poppins text-center flex justify-center items-center flex-col gap-2">
                <img src={dnd} alt="" />
                <p className="font-semibold text-[#186BAD] lg:text-xl">Drag & Drop</p>
                <p className="lg:text-base">
                  your image here or browse to upload Only JPG, png, GIF, and PDF files with a
                  max size of 15MB
                </p>
              </div>
            </label>
          </div>
          <div className="bio lg:w-[600px] flex flex-col relative pb-7">
            <label htmlFor="" className="font-bold text-[#186BAD] text-lg">
              Bio
            </label>
            <textarea
              placeholder="Write brief about yourself"
              name="bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
              spellCheck
              className={`bg-[#f2f1f1] p-4 rounded w-full h-[130px] outline-[#186BAD] ${
                formik.errors.bio && formik.touched.bio ? 'border-red-500' : ''
              }`}
            ></textarea>
            <p className="word-count absolute right-0 bottom-0 poppins font-semibold">
              {formik.values.bio.length}/{maxCharacters} characters
            </p>
            {formik.errors.bio && formik.touched.bio && (
              <div className="text-red-500">{formik.errors.bio}</div>
            )}
          </div>

          <div className=" lg:w-[600px] flex flex-col relative pb-7">
            <label htmlFor="" className="font-bold text-[#186BAD] text-lg">
              Subjects
            </label>
            <TagsInput
              value={formik.values.subject}
              onChange={(tags) => formik.setFieldValue('subject', tags)}
              inputProps={{ className: 'w-full p-2 rounded bg-transparent outline-[#186BAD]' }}
              className={`w-full bg-[#f2f1f1] p-2 rounded outline-[#186BAD] ${
                formik.errors.subject && formik.touched.subject ? 'border-red-500' : ''
              }`}
            />
            {formik.errors.subject && formik.touched.subject && (
              <div className="text-red-500">{formik.errors.subject}</div>
            )}
          </div>

          <div className=" lg:w-[600px] flex flex-col relative pb-7">
            <label htmlFor="" className="font-bold text-[#186BAD] text-lg">
              Grades you teach
            </label>
            <TagsInput
              value={formik.values.grade}
              onChange={(tags) => formik.setFieldValue('grade', tags)}
              inputProps={{ className: 'w-full p-2 rounded bg-transparent outline-[#186BAD]' }}
              className={`w-full bg-[#f2f1f1] p-2 rounded outline-[#186BAD] ${
                formik.errors.grade && formik.touched.grade ? 'border-red-500' : ''
              }`}
            />
            {formik.errors.grade && formik.touched.grade && (
              <div className="text-red-500">{formik.errors.grade}</div>
            )}
          </div>
          <div className="avaliability flex flex-col items-start justify-start lg:w-[600px]">
            <h3 className='poppins lg:text-2xl text-xl font-semibold text-[#186bad]'>Availability</h3>
            <h5 className='text-[#186bad] text-lg my-2'>Available Days</h5>
            <div className="inputs poppins grid grid-cols-4 gap-3">
              <div className="mondays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Monday" id="" />
                <p className="font-bold">Mondays</p>
              </div>
              <div className="Tuesdays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Tuesday" id="" />
                <p className="font-bold">Tuesdays</p>
              </div>
              <div className="Wednesdays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Wednesday" id="" />
                <p className="font-bold">Wednesdays</p>
              </div>
              <div className="Thursdays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Thursday" id="" />
                <p className="font-bold">Thursdays</p>
              </div>
              <div className="Fridays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Friday" id="" />
                <p className="font-bold">Fridays</p>
              </div>
              <div className="Saturdays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Saturday" id="" />
                <p className="font-bold">Saturdays</p>
              </div>
              <div className="Sundays flex items-center gap-2 bg-[#d9d9d9] py-1 px-2 rounded">
                <input type="checkbox" name="Sunday" id="" />
                <p className="font-bold">Sundays</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-[9.5rem]">
            <h5 className='text-[#186bad] text-lg my-5'>Available Time</h5>
            <div className=" grid grid-cols-6 gap-5">
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>01:00 - 02:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>02:00 - 03:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>03:00 - 04:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>04:00 - 05:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>05:00 - 06:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>06:00 - 07:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>07:00 - 08:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>08:00 - 09:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>09:00 - 10:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>10:00 - 11:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>11:00 - 12:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>12:00 - 13:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>13:00 - 14:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>14:00 - 15:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>15:00 - 16:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>16:00 - 17:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>17:00 - 18:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>18:00 - 19:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>19:00 - 20:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>20:00 - 21:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>21:00 - 22:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>22:00 - 23:00</label>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-base font-semibold'>23:00 - 00:00</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mb-20 mr-10">
        <button
          type="submit"
          className="float-right poppins cursor-pointer text-lg font-semibold transition-all hover:bg-[#186BAD] hover:text-white px-5 py-2 rounded-lg"
        >
          Next <FontAwesomeIcon icon={faChevronRight} className="text-xl font-bold ml-5" />
        </button>
      </div>
      <Footer2/>
    </div>
  );
};

export default BuildProfile;
