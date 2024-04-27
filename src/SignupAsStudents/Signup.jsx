import React, { useState } from 'react';
import Header from '../Components/Header';
import PersonalInfoTab from './SignupTabs/PersonalInfoTab';
import AcademicDetails from './SignupTabs/AcademicDetails';
import Preferences from './SignupTabs/Preferences';
import LearningGoals from './SignupTabs/LearningGoals';
import TermsConditions from './SignupTabs/TermsConditions';

function Signup() {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    academicDetails: {},
    preferences: {},
    learningGoals: {},
  });

  const nextTab = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
    setCurrentTab(currentTab + 1);
  };

  const prevTab = () => {
    setCurrentTab(currentTab - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 1:
        return <PersonalInfoTab onNext={nextTab} />;
      case 2:
        return <AcademicDetails onNext={nextTab} />;
      case 3:
        return <Preferences onNext={nextTab} />;
      case 4:
        return <LearningGoals onNext={nextTab} />;
      case 5:
        return <TermsConditions formData={formData} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className='poppins'>
      <Header />
      <div className="tabs mt-8">
        <h2 className='text-center lg:text-2xl font-bold'>Student Registration | Personal Information</h2>
        <div className="flex justify-center my-10 text-sm">
          <button className={`${currentTab === 1 ? "active bg-[#1f70b2] text-white" : ""} w-[180px] border font-semibold border-gray-300 p-3 `} onClick={() => setCurrentTab(1)}>Personal Info</button>
          <button className={`${currentTab === 2 ? "active bg-[#1f70b2] text-white" : ""} w-[180px] border font-semibold border-gray-300 p-3 `} onClick={() => setCurrentTab(2)}>Academic Details</button>
          <button className={`${currentTab === 3 ? "active bg-[#1f70b2] text-white" : ""} w-[180px] border font-semibold border-gray-300 p-3 `} onClick={() => setCurrentTab(3)}>Preferences</button>
          <button className={`${currentTab === 4 ? "active bg-[#1f70b2] text-white" : ""} w-[180px] border font-semibold border-gray-300 p-3 `} onClick={() => setCurrentTab(4)}>Learning Goals</button>
          <button className={`${currentTab === 5 ? "active bg-[#1f70b2] text-white" : ""} w-[180px] border font-semibold border-gray-300 p-3 `} onClick={() => setCurrentTab(5)}>Terms & Conditions</button>
        </div>
      </div>
      <div>
        {renderTabContent()}
      </div>
      <div>
        {currentTab !== 1 && (
          <button onClick={prevTab}>Back</button>
        )}
        {currentTab !== 5 && (
          <button onClick={() => nextTab()}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Signup;
