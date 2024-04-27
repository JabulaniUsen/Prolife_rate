import { useState } from 'react'
import lock from '../../Icons/lock.svg'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const LoginSecurity = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = () => {
    setShowPasswordForm(true);
  };

  const closeChangePassword = () => {
    setShowPasswordForm(false);
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string().required('New Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      // You may want to call your API to update the password
      console.log(values);
      closeChangePassword();
    },
  });

  const popupVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  

  return (
    <div className='flex flex-col items-end'>
      <div className="flex items-start gap-5 poppins">
        <img src={lock} alt="" />
        <div className=" flex flex-col gap-20">
          <div className="text">
            <p>
              Your privacy and security are top priority. We do all 
              we can to keep your account secure, and we encourage 
              you to do the same by following best practices: Update 
              your password regularly, enable Two-Factor Authentication, 
              and keep your Support PIN private.
            </p>
          </div>

          <div className="password flex items-start gap-10 justify-between border-b-2 pb-10">
            <p className='font-bold'>Password</p>
            <div className="">
              <p className='text-lg font-semibold'>Changed on <span>OCT 30, 2022</span>,<span>2:29 PM EDT</span></p>
              <p>* In order to remove captcha from login screen you need to change your password every 6 months.</p>
            </div>
            <button className='rounded-xl px-6 py-1 font-bold bg-[#D9D9D9]' onClick={handleChangePassword}>EDIT</button>
          </div>

          <div className="authentication flex items-start gap-10 justify-between border-b-2 pb-10">
            <p className='font-bold'>Two-Factor Authentication</p>
            <div className="">
              <p className='text-lg '>ON (SMS)</p>
            </div>
            <button className='rounded-xl px-6 py-1 font-bold bg-[#D9D9D9]'>MANAGE</button>
          </div>

          <div className="password flex items-start gap-10 justify-between pb-10">
            <p className='font-bold'>Support PIN</p>
            <div className="">
              <p>Valid till Jan 5, 2024, 9:40 AM EST</p>
            </div>
            <button className='rounded-xl px-6 py-1 font-bold bg-[#D9D9D9]'>REFRESH</button>
          </div>
        </div>
      </div>
      <button className='rounded-lg bg-[#186bad] p-4 font-bold mt-20 text-white'>Next</button>

      {showPasswordForm && (
        <AnimatePresence>
          <motion.div
            variants={popupVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="popup-overlay poppins fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <div className="popup bg-white rounded-lg lg:w-[900px]">
              <div className="bg-[#186BAD] rounded-t p-4 px-20">
                <p className='text-white text-xl'>Change Password</p>
              </div>
              <div className=" p-5 px-20 flex flex-col gap-5">
                <p>
                  You may update your password any time. We suggest you choose a strong 
                  password and update it regularly, e.g. every 6 months. All new passwords 
                  must contain at least 8 characters. We also suggest having at least one 
                  capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), 
                  and one number (0-9) in your password for the best strength.
                </p>
                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
                <div className="currentPassword flex justify-between items-center">
                <label className='text-base font-semibold' htmlFor="currentPassword">Current Password</label>
                <div className='p-2 px-4 w-[60%] rounded border border-black flex items-center gap-1'>
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    id="currentPassword"
                    name="currentPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentPassword}
                    className={`outline-none bg-none w-full ${formik.touched.currentPassword && formik.errors.currentPassword ? 'border-red-500' : ''}`}
                  />
                  <FontAwesomeIcon
                    icon={showCurrentPassword ? faEye : faEyeSlash}
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                  />
                </div>
              </div>
                {formik.touched.currentPassword && formik.errors.currentPassword ? (
                  <p className="text-red-500 text-sm">{formik.errors.currentPassword}</p>
                ) : null}

              <div className="newPassword flex justify-between items-center">
                <label className='text-base font-semibold' htmlFor="newPassword">New Password</label>
                <div className='p-2 px-4 w-[60%] rounded border border-black flex items-center gap-1'>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    className={`outline-none bg-none w-full ${formik.touched.newPassword && formik.errors.newPassword ? 'border-red-500' : ''}`}
                  />
                  <FontAwesomeIcon
                    icon={showNewPassword ? faEye : faEyeSlash}
                    onClick={() => setShowNewPassword((prev) => !prev)}
                  />
                </div>
              </div>
                {formik.touched.newPassword && formik.errors.newPassword ? (
                  <p className="text-red-500 text-sm">{formik.errors.newPassword}</p>
                ) : null}

              <div className="confirmPassword flex justify-between items-center">
                <label className='text-base font-semibold' htmlFor="confirmPassword">Confirm Password</label>
                <div className='p-2 px-4 w-[60%] rounded border border-black flex items-center gap-1'>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={`outline-none bg-none w-full ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  />
                </div>
              </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
                ) : null}

                  <div className="buttons flex my-5 justify-center items-center gap-5">
                    <button type="submit" className="py-2 px-6 text-white font-bold bg-[#186bad] rounded-2xl">Save Changes</button>
                    <button type="button" className="py-2 px-6 text-red-700 font-bold rounded-2xl" onClick={closeChangePassword}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default LoginSecurity;