import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { contactFormAction } from '../../../Redux/actions/Auth'
import { toast } from 'react-toastify';
import { clearContactFormStatus } from '../../../Redux/reducers/authReducer';

function Form() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authenticationSlice);

  // useEffect(() => {
  //   if (authSelector.contactFormActionStatus === 'loading') {
  //     setIsloading(true);
  //     return;
  //   }
  // }, [authSelector.contactFormActionStatus]);

  useEffect(() => {
    if (authSelector.contactFormActionStatus === 'failed') {
      toast.error(`${authSelector.contactFormActionError}`);
      dispatch (clearContactFormStatus())
      return;
    }
  }, [authSelector.contactFormActionStatus]);

  useEffect(() => {
    if (authSelector.contactFormActionStatus === 'completed') {
      // Show toast message
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
      dispatch (clearContactFormStatus())
    } 
  }, [authSelector.contactFormActionStatus]);



  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission processing
    setShowModal(true);

    // Clear input fields after 2 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone_number('');
      setMessage('');

    }, 2000);

    dispatch(
      contactFormAction({
        name: name,
        email: email,
        phone_number: phone_number,
        message: message
      })

    );
  };

  return (
    <div className='flex flex-wrap justify-center poppins px-5 lg:px-28 my-28'>
      <div className="text lg:w-[50%]">
        <div className="header py-6">
          <h3 className='text-[#186BAD]'>Contact Us</h3>
          <h1 className='lg:text-3xl text-2xl font-semibold'>Get in Touch with Us</h1>
        </div>
        <div className="texts">
          <p className='lg:w-[450px] text-justify'>
            Discover Proliferate.AI – your gateway to innovative education! 
            Our platform offers expert-curated courses for every learner, 
            from beginner to pro. Join a vibrant community of over 20,000 
            daily users, staying ahead with cutting-edge content.
            Empower yourself with Proliferate.AI. Elevate your 
            skills, explore new horizons, and shape your future. 
            Ready to dive in? Start learning, growing, and thriving with us!
          </p>
        </div>
        <div className="tell my-12 flex flex-col gap-7">
          <div className="number">
            <p>(289)952-2596</p>
          </div>
          <div className="">
            <p>info@proliferate.ai</p>
          </div>
        </div>
      </div>
      <div className="shadow-lg p-5">
        <div className=' form flex flex-col gap-4 lg:w-[400px] w-[300px]'>
          <input
            type="text"
            id="name"
            placeholder='Your Name'
            className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            placeholder='Your Email'
            className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            id="phone"
            placeholder='Your Phone Number'
            className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none'
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            required
          />
          <textarea
            id="message"
            cols="40"
            rows="5"
            placeholder='Your Message'
            className='bg-[#F2F1F1] rounded-lg p-3 px-4 outline-none border-none'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" onClick={handleSubmit} className='bg-[#186bad] hover:bg-[#0e4979] py-3 rounded-lg text-white'>Send Message</button>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="popup-modal text-center">
          <FontAwesomeIcon icon={faCheckCircle} className='text-7xl text-[#186BAD] my-4' />
          <h2 className='text-2xl'>Thank you <span className='text-[#186BAD] font-semibold '>{name}</span> <br />
            <span className='text-xl my-2'>for reaching out to us! <br /> We will get back to you <br /> as soon as possible.</span></h2>
        </div>
      )}
    </div>
  );
}

export default Form;
