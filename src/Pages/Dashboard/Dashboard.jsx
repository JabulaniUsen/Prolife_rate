import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import StudentHeader from './Components/StudentHeader';
import Loading from '../../Components/Loading';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedButton, setSelectedButton] = useState('Dashboard');
  const [isLoading, setIsLoading] = useState(false);

  const handleTabSwitch = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const TabButton = ({ tabNumber, label, icon, subButtons }) => (
    <div className="">
      <button
        className={`${
          selectedButton === label
            ? ' text-white bg-[#1f70b2]'
            : ' text-[#013A57]'
        } py-3 hover:bg-[#013A57] hover:text-white text-black px-5 font-semibold w-[200px] flex items-center justify-between gap-2 focus:outline-none focus:shadow-outline`}
        onClick={() => {
          setSelectedButton(label);
          setActiveTab(1); 
        }}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          <span>{label}</span>
        </div>
      </button>

      {selectedButton === label && (
        <div className="top-full left-0 text-black ">
          {subButtons.map((subButton) => (
            <button
              key={subButton.label}
              className={`w-[190px] text-left flex ml-2 py-2 px-4 bg-[#2290eb] text-white border border-[#48a3ee] ${
                activeTab === subButton.tabNumber
                  ? 'bg-[#1d7fcf]'
                  : ''
              }`}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setActiveTab(subButton.tabNumber);
                  setIsLoading(false);
                }, 1000);
              }}
            >
              {subButton.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="">
      <StudentHeader/>
      <div className="flex overflow-hidden">
        <div className="flex flex-col justify-between gap-[8rem] items-center w-1/5 p-4 py-10 bg-[#3795e5]">
          <div className="flex flex-col gap-3">
            <TabButton
              label="Dashboard"
              icon={faChartBar}
              subButtons={[
                { label: 'Overview', tabNumber: 1 },
                { label: 'Operations', tabNumber: 2 },
                { label: 'Finance', tabNumber: 3 },
              ]}
            />
          </div>
          <div className="flex flex-col gap-3">
            <TabButton label="Settings" icon={faCog} subButtons={[]} />
          </div>
        </div>

        <div className="flex-grow">
          {isLoading && <Loading />} 
          {activeTab === 1 && !isLoading && <p>Home</p>}
          {activeTab === 2 && !isLoading && <p>Operations</p>}
          {activeTab === 3 && !isLoading && <p>Finance</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
