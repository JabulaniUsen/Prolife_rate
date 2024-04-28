import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Preferences({ onNext, onBack }) {
  const languages = [
    'English',
    'Mandarin Chinese',
    'Hindi',
    'Spanish',
    // Other languages...
  ];

  const initialValues = {
    availability: '',
    additionalPreferences: '',
    communicationLanguage: ''
  };

  const onSubmit = (values) => {
    onNext({ preferences: values });
  };

  return (
    <div>
      <div className='lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins'>
        <h2 className='text-center lg:w-[700px] m-auto mb-16'>Please provide your preferences.</h2>
        <Formik
          initialValues={initialValues}
          // onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
        >
          <Form className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-14 gap-x-10 '>
            <div className="flex flex-col">
              <label className='text-base font-semibold'>Availability:</label>
              <Field as="select" name="availability" className="border border-gray-300 bg-white p-3 x-5 rounded-lg">
                <option value="">Select</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
              </Field>
              <ErrorMessage name="availability" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className='text-base font-semibold'>Additional Preferences/Requirements:</label>
              <Field as="textarea" name="additionalPreferences" className="border border-gray-300 bg-white p-3 rounded-lg" placeholder="Additional Preferences/Requirements" />
              <ErrorMessage name="additionalPreferences" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="flex flex-col">
              <label className='text-base font-semibold'>Communication Language:</label>
              <Field as="select" name="communicationLanguage" className="border border-gray-300 bg-white p-3 rounded-lg">
                <option value="">Select</option>
                {languages.map((language, index) => (
                  <option key={index} value={language}>{language}</option>
                ))}
              </Field>
              <ErrorMessage name="communicationLanguage" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </Form>
        </Formik>
      </div>
      <div className="flex items-end justify-between lg:w-[80%] m-auto border border-gray-400 rounded-xl px-12 py-5 lg:mt-5 mt-2 poppins">
        <button className=' flex border border-[#1f70b2] text-[#1f70b2] hover:bg-[#1f70b2] transition-all hover:text-white font-semibold px-10 py-2 rounded' onClick={onBack}>Back</button>
        <button type="submit" onClick={onSubmit} className=' flex bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded'>Next</button>
      </div>
    </div>
  );
}

export default Preferences;
