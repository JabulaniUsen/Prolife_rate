import React from 'react'

function KeyFeatures() {
  return (
    <div className='poppins mx-2 lg:mx-28 px-3 lg:px-6 py-5 my-16 relative'>
        <div className="bg-[#186BAD] rounded-2xl h-[150px] w-[150px] absolute top-0 left-0"></div>
        <div className="bg-[#186BAD] rounded-2xl h-[150px] w-[150px] absolute bottom-0 right-0"></div>
        <div className="border-2 rounded-2xl  bg-white relative lg:p-14 p-5">
            <div className="">
                <h1 className='lg:text-2xl text-xl mb-2 text-[#186BAD] font-semibold'>Key Features of Our Program</h1>
                <p className='font-semibold lg:text-base text-sm'>Our program encompasses a variety of key features to enhance your learning experience:</p>
            </div>
            <div className="pt-10 flex flex-col gap-5">
                <div className="">
                    <h2 className='text-[#186BAD] text-lg font-semibold'>1. Tutoring Services</h2>
                    <ul className='list-disc ml-10 font-semibold lg:text-base text-sm'>
                        <li>One-on-One Tutoring: Personalized support with dedicated tutors.</li>
                        <li>Group Tutoring: Collaborative learning in tutor-led group sessions.</li>
                        <li>Subject-Specific Tutoring: Support for a wide range of subjects and topics.</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='text-[#186BAD] text-lg font-semibold'>2. Educational Resources</h2>
                    <ul className='list-disc ml-10 font-semibold lg:text-base text-sm'>
                        <li>Library of Materials: Access to textbooks, study guides, and educational materials.</li>
                        <li>Online Resources: A vast collection of online resources to aid your learning.</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='text-[rgb(24,107,173)] text-lg font-semibold'>3. Personalized Support</h2>
                    <ul className='list-disc ml-10 font-semibold lg:text-base text-sm'>
                        <li>Mentoring and Academic Guidance: Mentorship to help you set and achieve educational and career goals.</li>
                        <li>Career and College Counselling: Guidance on college applications and career choices.</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='text-[#186BAD] text-lg font-semibold'>4. Flexible Learning Options</h2>
                    <ul className='list-disc ml-10 font-semibold lg:text-base text-sm'>
                        <li>Self-Paced Learning: Study at your own pace using our resources.</li>
                        <li>Test Preparation: Courses and materials for standardized tests.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyFeatures