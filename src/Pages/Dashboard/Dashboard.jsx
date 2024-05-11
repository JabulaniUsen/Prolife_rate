import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleRight, faHouse, faPencil, faFile, faUser, faMessage, faCreditCard, faCog, faSignOut } from '@fortawesome/free-solid-svg-icons';
import StudentHeader from './Components/StudentHeader';
import Loading from '../../Components/Loading';
import Home from './Tabs/Home';
import { faSignalMessenger } from '@fortawesome/free-brands-svg-icons';
import refer from '../../Assets/refer.svg'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedButton, setSelectedButton] = useState('Dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabSwitch = (tabNumber) => {
    setActiveTab(tabNumber);
    setIsMenuOpen(false);
  };

  const TabButton = ({ label, icon, subButtons }) => (
    <div className="poppins">
      <button
        className={`text-white bg-[#1f70b2] border-[#48a3ee] border ${
          selectedButton === label ? 'text-white bg-[#1f70b2]' : 'text-[#013A57]'
        } py-3 hover:bg-[#013A57] hover:text-white text-black px-5 font-semibold lg:w-[200px] w-[160px] lg:text-base text-sm flex items-center justify-between gap-2 focus:outline-none focus:shadow-outline`}
        onClick={() => {
          setSelectedButton(label);
          setActiveTab(1);
        }}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} />
          <span>{label}</span>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>

      {selectedButton === label && (
        <div className="top-full left-0 text-black ">
          {subButtons.map((subButton) => (
            <button
              key={subButton.label}
              className={`lg:w-full items-center justify-center flex py-2 px-4 bg-[#2290eb] hover:bg-[#1a71b956] w-[160px] lg:text-base text-xs text-white border border-[#48a3ee] ${
                activeTab === subButton.tabNumber ? 'bg-[#1a72b9]' : ''
              }`}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setActiveTab(subButton.tabNumber);
                  setIsLoading(false);
                }, 1500);
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
      <StudentHeader />
      <div className="flex overflow-hidden">
        <div className="fixed lg:hidden left-2 top-4 z-50 flex items-center justify-center w-10 h-10 bg-[#3795e5] text-white cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Menu content */}
        <div
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } mobileResponsiveness transition-transform duration-300 ease-in-out fixed left-0 top-0 z-40 flex flex-col justify-between shadow-inner gap-[8rem] items-center w-[50%] p-4 py-10 bg-[#3795e5] h-full overflow-y-auto`}
        >
          <div className="flex flex-col">
            <div className="my-10">
              <TabButton
                label="Dashboard"
                icon={faHouse}
                subButtons={[
                  { label: 'Overview', tabNumber: 1 },
                  { label: 'Progress Tracker', tabNumber: 2 },
                  { label: 'Notifications', tabNumber: 3 },
                ]}
              />
            </div>
            {/* Other menu buttons */}
            <TabButton
              label="Class"
              icon={faPencil}
              subButtons={[
                { label: 'My Classes', tabNumber: 4 },
                { label: 'Upcoming Classes', tabNumber: 5 },
                { label: 'Reschedule', tabNumber: 6 },
              ]}
            />
            <TabButton
              label="Assignments"
              icon={faFile}
              subButtons={[
                { label: 'View Assignment', tabNumber: 7 },
                { label: 'Submit Assignment', tabNumber: 8 },
              ]}
            />
            <TabButton
              label="Tutors"
              icon={faUser}
              subButtons={[
                { label: 'My Tutors', tabNumber: 9 },
                { label: 'Manage Tutors', tabNumber: 10 },
              ]}
            />
            <TabButton
              label="Messaging"
              icon={faMessage}
              subButtons={[
                { label: 'View Messages', tabNumber: 11 },
              ]}
            />
            <TabButton
              label="Payment"
              icon={faCreditCard}
              subButtons={[
                { label: 'View Messages', tabNumber: 11 },
              ]}
            />
            <div className="my-10">
              <TabButton
                label="Feedback"
                icon={faSignalMessenger}
                subButtons={[
                  { label: 'View Messages', tabNumber: 11 },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TabButton label="Settings" icon={faCog} subButtons={[]} />
            <TabButton label="Logout" icon={faSignOut} subButtons={[]} />
            <div className="">
              <img src={refer} alt="" className='w-[200px] mb-[-50px]' />
              <button className='text-white bg-[#186bad] rounded-md py-3 hover:bg-[#013A57] px-5 font-semibold lg:w-[200px] w-[160px] lg:text-lg text-sm items-center'>Refer & Earn</button>
            </div>
          </div>
        </div>


        {/* ///////////////////////////// */}


        <div className="lg:flex hidden flex-col justify-between shadow-inner gap-[8rem] items-center w-1/5 p-4 py-10 bg-[#3795e5]">
          <div className="flex flex-col">
            <div className="my-10">
              <TabButton
                label="Dashboard"
                icon={faHouse}
                subButtons={[
                  { label: 'Overview', tabNumber: 1 },
                  { label: 'Progress Tracker', tabNumber: 2 },
                  { label: 'Notifications', tabNumber: 3 },
                ]}
              />
            </div>
            {/* Other menu buttons */}
            <TabButton
              label="Class"
              icon={faPencil}
              subButtons={[
                { label: 'My Classes', tabNumber: 4 },
                { label: 'Upcoming Classes', tabNumber: 5 },
                { label: 'Reschedule', tabNumber: 6 },
              ]}
            />
            <TabButton
              label="Assignments"
              icon={faFile}
              subButtons={[
                { label: 'View Assignment', tabNumber: 7 },
                { label: 'Submit Assignment', tabNumber: 8 },
              ]}
            />
            <TabButton
              label="Tutors"
              icon={faUser}
              subButtons={[
                { label: 'My Tutors', tabNumber: 9 },
                { label: 'Manage Tutors', tabNumber: 10 },
              ]}
            />
            <TabButton
              label="Messaging"
              icon={faMessage}
              subButtons={[
                { label: 'View Messages', tabNumber: 11 },
              ]}
            />
            <TabButton
              label="Payment"
              icon={faCreditCard}
              subButtons={[
                { label: 'View Messages', tabNumber: 11 },
              ]}
            />
            <div className="my-10">
              <TabButton
                label="Feedback"
                icon={faSignalMessenger}
                subButtons={[
                  { label: 'View Messages', tabNumber: 11 },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TabButton label="Settings" icon={faCog} subButtons={[]} />
            <TabButton label="Logout" icon={faSignOut} subButtons={[]} />
            <div className="">
              <img src={refer} alt="" className='w-[200px] mb-[-50px]' />
              <button className='text-white bg-[#186bad] rounded-md py-3 hover:bg-[#013A57] px-5 font-semibold lg:w-[200px] w-[160px] lg:text-lg text-sm items-center'>Refer & Earn</button>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          {isLoading && <Loading />}
          {activeTab === 1 && !isLoading && <Home />}
          {activeTab === 2 && !isLoading && <p>Progress Tracker</p>}
          {activeTab === 3 && !isLoading && <p>Notifications</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
