import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TermsConditions({ formData, onSubmit, onBack }) {
  // const handleSubmit = () => {
  //   onNext(formData);
  //   toast.success('Details saved');
  //   console.log(formData);
  // };

  return (
    <div className="">
      <div className='lg:w-[80%] m-auto border flex flex-col border-gray-400 rounded-xl px-12 py-8 pb-[4rem] poppins'>
        <h2 className='text-center lg:w-[700px] m-auto mb-10 text-lg font-bold'>Terms and Conditions</h2>
        <div className="terms-and-conditions lg:w-[900px] m-auto mb-8">
          <p><strong>1. Acceptance of Terms:</strong> By accessing or using the Proliferate LMS platform, you agree to be bound by these terms and conditions, our privacy policy, and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access or use the platform.</p>
          <p><strong>2. User Registration:</strong> You must register an account with accurate and complete information to access certain features of the platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          <p><strong>3. Use of Platform:</strong> Proliferate LMS provides a platform for educational purposes, including access to learning materials, tutoring services, and communication tools. You agree to use the platform only for lawful purposes and in accordance with these terms and conditions.</p>
          <p><strong>4. User Content:</strong> You retain ownership of any content you submit, upload, or post on the platform. By providing content, you grant Proliferate LMS a worldwide, non-exclusive, royalty-free license to use, modify, reproduce, and distribute your content for the purpose of operating and improving the platform.</p>
          <p><strong>5. Tutoring Services:</strong> Proliferate LMS connects students with tutors for educational purposes. We do not guarantee the availability, quality, or effectiveness of tutoring services, and we are not responsible for any interactions or disputes between users.</p>
          <p><strong>6. Payment and Billing:</strong> Certain features or services on the platform may require payment. By using these features or services, you agree to pay any applicable fees and charges. All payments are non-refundable unless otherwise stated. If a student is unable to attend a class, they may have the option to reschedule the class subject to the tutor's availability. However, if no early notification of class rescheduling is provided, the missed class will not be refunded. In the event of a missed class due to the tutor's unavailability or technical issues, the tutor will offer an alternative class schedule.</p>
          <p><strong>7. Platform Content and Intellectual Property:</strong> All content available on the platform, including courses, materials, and resources, are the intellectual property of Proliferate and its tutors. Any unauthorized use, reproduction, or distribution of the content is strictly prohibited. Online tutors retain the rights to their course content. Learners may not share, reproduce, or distribute course materials without the tutor's permission.</p>
          <p><strong>8. Code of Conduct:</strong> Users must conduct themselves respectfully and professionally while interacting on the platform. Any form of harassment, discrimination, or inappropriate behavior will not be tolerated and may result in account termination.</p>
          <p><strong>9. Privacy and Security:</strong> Your privacy and security are important to us. Please review our privacy policy to understand how we collect, use, and protect your personal information.</p>
          <p><strong>10. Modifications to Terms:</strong> Proliferate LMS reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the platform after any such changes constitutes your acceptance of the revised terms.</p>
          <p><strong>11. Termination of Account:</strong> Proliferate LMS reserves the right to suspend or terminate your account and access to the platform at any time for any reason, including but not limited to violation of these terms and conditions.</p>
          <p><strong>12. Contact Us:</strong> If you have any questions or concerns about these terms and conditions, please contact us at contact@proliferate.ai</p>
        </div>
        <div className="flex justify-between">
          <button onClick={onBack} className='bg-[#1f70b2] text-white font-semibold px-6 py-2 rounded'>Back</button>
          <button onClick={onSubmit} className='bg-[#1f70b2] text-white font-semibold px-10 py-2 rounded'>I Agree</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TermsConditions;
