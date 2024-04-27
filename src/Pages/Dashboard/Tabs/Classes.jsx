import React, { useState } from 'react';
import Monday from '../Components/Classes/Monday';
import Tuesday from '../Components/Classes/Tuesday';
import Thursday from '../Components/Classes/Thursday';
import Friday from '../Components/Classes/Friday';
import Saturday from '../Components/Classes/Saturday';
import Wednesday from '../Components/Classes/Wednesday';

const tabs = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Classes = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <Monday />;
      case 1:
        return <Tuesday />;
      case 2:
        return <Wednesday/>;
      case 3: 
        return <Thursday/>;
      case 4:
        return <Friday/>;
      case 5:
        return <Saturday/>
      default:
        return null;
    }
  };

  return (
    <div className=" px-12">
      <div className="my-10">
        <div className="flex justify-between">
          <h3 className='Poppins text-3xl font-bold'>My Schedules</h3>

        </div>
        <div className="flex gap-4 my-[2rem] ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer  py-2 px-7 rounded-2xl text-lg font-semibold ${
                activeTab === index ? ' bg-[#186BAD] text-white' : 'bg-[#D9D9D9]'
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
};

export default Classes;
