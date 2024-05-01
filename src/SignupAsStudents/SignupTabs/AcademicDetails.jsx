import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TagsInput } from "react-tag-input-component";

function AcademicDetails({ onNext, onBack }) {
  const formik = useFormik({
    initialValues: {
      gradeYear: '',
      subjects: [],
      attendanceType: '',
      currentLocation: ''
    },
    validationSchema: Yup.object({
      gradeYear: Yup.string().required('Required'),
      subjects: Yup.array().min(1, 'At least one subject is required'),
      attendanceType: Yup.string().required('Required'),
      currentLocation: Yup.string().required('Required')
    }),
    onSubmit: values => {
      onNext({ academicDetails: values });
    },
  });

  return (
    <div className=''>
      <div className="lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins">
        <h2 className='text-center lg:w-[700px] m-auto mb-16'>
          Please enter the name of your school, college, or university, along with your grade or year of study. 
          Select the subjects you need tutoring for and share your current grades.
        </h2>
        <form onSubmit={formik.handleSubmit} className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-14 gap-x-10'>
          <div className="flex flex-col">
            <label className='text-base font-semibold'>Grade/Year:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <input type="text" name="gradeYear" value={formik.values.gradeYear} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full' placeholder='Grade/Year' />
            </div>
              {formik.touched.gradeYear && formik.errors.gradeYear ? <div className="text-red-500 ml-3">{formik.errors.gradeYear}</div> : null}
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Subjects Needing Tutoring:</label>
            <div>
              <TagsInput
                value={formik.values.subjects}
                onChange={(values) => formik.setFieldValue('subjects', values)}
                name="fruits"
                placeHolder="Enter subject"
              />
            </div>
              {formik.touched.subjects && formik.errors.subjects ? <div className="text-red-500 ml-3">{formik.errors.subjects}</div> : null}
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Attendance Type:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <select name="attendanceType" value={formik.values.attendanceType} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full outline-none'>
                <option value="">Select</option>
                <option value="fulltime">On-site</option>
                <option value="parttime">Hybrid</option>
                <option value="parttime">Online</option>
              </select>
            </div>
              {formik.touched.attendanceType && formik.errors.attendanceType ? <div className="text-red-500 ml-3">{formik.errors.attendanceType}</div> : null}
          </div>

          <div className="flex flex-col">
            <label className='text-base font-semibold'>Current Location:</label>
            <div className="border border-gray-300 bg-white p-3 rounded-lg">
              <input type="text" name="currentLocation" value={formik.values.currentLocation} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full' placeholder='Current Location' />
            </div>
              {formik.touched.currentLocation && formik.errors.currentLocation ? <div className="text-red-500 ml-3">{formik.errors.currentLocation}</div> : null}
          </div>
        </form>
      </div>
      <div className="flex items-end justify-between lg:w-[80%] m-auto border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 poppins">
        <button className=' flex border border-[#1f70b2] text-[#1f70b2] hover:bg-[#1f70b2] transition-all hover:text-white font-semibold px-10 py-2 rounded' onClick={onBack}>Back</button>
        <button type="submit" onClick={formik.handleSubmit} disabled={!formik.isValid} className=' flex bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded'>Next</button>
      </div>
    </div>
  );
}

export default AcademicDetails;
