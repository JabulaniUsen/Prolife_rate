import React, { useState } from "react";
import Credential from "./Profile Components/Credential";
import LoginSecurity from "./Profile Components/Login&Security";
import GradeSubjects from "./Profile Components/GradeSubjects";
import ProfileSummary from "./Profile Components/ProfileSummary";

const tabs = [
  'Account Setting',
  'Login & Security',
  'Grade/Subjects',
  'Profile Summary'
  ];
function Settings() {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Credential />;
      case 1:
        return <LoginSecurity />;
      case 2:
        return <GradeSubjects />;
      case 3: 
      return <ProfileSummary />
      default:
        return null;
    }
  };

  return (
    <div className="mt-10 mx-16">
      <div className="">
        <div className="flex gap-5 my-[4rem]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer poppins  border-b-[2px] ${
                activeTab === index ? ' text-[#186BAD] border-[#186BAD] border-b-[2px]' : 'text-[#000]'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Settings;
