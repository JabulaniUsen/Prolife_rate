import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import menu from '../../Assets/menu.png';
import user from '../../Assets/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCartShopping,
  faChevronDown,
  faMagnifyingGlass,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/logo2.png';
import home from './Icons/home.png';
import teacher from './Icons/teacher.png';
import bank from './Icons/bank.png';
import settings from './Icons/setting.png';
import report from './Icons/chart-square.png';
import messages from './Icons/ChatBubble.png';
import refer from './Icons/refer.png';
import support from './Icons/support.png';
import setting from './Icons/settings.png';

// Import Tab Components
import Classes from './Tabs/Classes';
import Home from './Tabs/Home';
import Assignment from './Tabs/Assignment';
import Settings from './Tabs/Settings';
import Messages from './Tabs/Messages';
import PaymentInfo from './Tabs/PaymentInfo';
import Reports from './Tabs/Reports';
import Footer2 from '../../Components/Footer2';
import { Link } from 'react-router-dom';
import Notifications from './Components/Notification';
import {UseSessionContext} from '../../context/createContext/useSession';

// Tabs Component
const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="tab-buttons flex flex-col gap-2 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={
            index === activeTab
              ? 'active'
              : ' flex gap-2 items-center justify-start text-white bg-[#186bad] w-[170px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const {session, Logout}=useContext(UseSessionContext)
  const navigator=useNavigate()
  const [loading, setIsloading] = useState(true)
  
  useEffect(() => {
    setIsloading(true)
    if(!(session?.authentication?.signin)) {
      // console.log('ji')
      navigator("/signin")
    }
    if(session?.authenthentication?.user_type == "tutor") {
      navigator("/tutordashboard")
    }
    setIsloading(false)
  },[navigator,  loading, session?.authentication?.sigin, session?.authentication?.user_type])
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const navigateToAddStudent = () => {
    // Set the active tab index to the index of the Settings tab
    setActiveTab(tabs.findIndex(tab => tab.label === 'Settings and profile'));
  };

  const tabs = [
      {
        label: 'Dashboard',
        contentComponent: <Home/>,
        img: home
      },
      {
        label: 'My Classes',
        contentComponent: <Classes />,
        img: home
      },
      {
          label: 'Home Work',
          contentComponent: <Assignment />,
          img: teacher
      },
      {
          label: 'Payment Info',
          contentComponent: <PaymentInfo />,
          img: bank
      },
      {
          label: 'Settings and profile',
          contentComponent: <Settings />,
          img: settings
      },
      {
          label: 'Reports',
          contentComponent: <Reports />,
          img: report
      },
      {
          label: 'Messages',
          contentComponent: <Messages />,
          img: messages
      },
      
    ];

  return (
    !loading && <div className="">
      <div className={`flex w-[20%] ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
        <div
          className={`sideBar bg-[#2977B5] flex flex-col items-center px-5 ${
            isSidebarVisible ? '' : 'hidden'
          }`}
        >
          <Link to='/'>
            <div className="logo py-10 px-10">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className=" flex flex-col gap-2 my-20">
            <Tabs tabs={tabs} setActiveTab={setActiveTab} />
          </div>

          <div className="logout">
            <button onClick={() => {
              Logout('STUDENT')
            }} className="flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover: rounded">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          </div>

          <div className="refer flex flex-col justify-center item-center my-20">
            <img src={refer} alt="" />
            <button className="bg-[#D9D9D9] py-2 px-4 rounded-full shadow">Refer your friend</button>
          </div>

          <div className="">
            <button className="flex gap-2 items-center justify-start bg-[#ffffff] w-[200px] py-3 text-sm px-5 rounded-lg my-2 text-[#344054]">
              <img src={support} alt="" />
              Support
            </button>
            <button className="flex gap-2 items-center justify-start bg-[#ffffff] w-[200px] py-3 text-sm px-5 rounded-lg my-2 text-[#344054]">
              <img src={setting} alt="" />
              Settings
            </button>
          </div>
        </div>

        <div className="body lg:px-[20px]">
          <div className={`header flex justify-between p-10 lg:p-5 lg:w-[1100px] bg-white items-center ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
            <div className="menu" onClick={toggleSidebar}>
              <img src={menu} className="cursor-pointer lg:hidden" alt="" />
            </div>
            <div className="div lg:w-[400px] w-[300px] lg:ml-[400px] ml-2 border rounded-xl flex">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-400 mx-3 lg:py-2" />
              <input type="text" placeholder="Search anything" />
            </div>
            {/* <div className="">
            <button onClick={navigateToAddStudent} className="bg-[#186bad] py-3 px-6 text-white rounded-lg text-sm">+ Add Student</button>
            </div> */}
            <Notifications/>
            {/* <FontAwesomeIcon icon={faCartShopping} className="text-2xl text-[#56606D]" /> */}
            <div className="user flex items-center gap-2 mx-2">
              <div className="border rounded-full border-[#dadada] p-5">
                <img src="" alt="" />
              </div>
              <div className="">
                <h2 className='studentName'>{session?.studentProfile?.profile?.first_name + " " + session?.studentProfile?.profile?.last_name}</h2>
              </div>
              {/* <FontAwesomeIcon icon={faChevronDown} /> */}
            </div>
          </div>
          {tabs[activeTab].contentComponent}
        </div>

      </div>
        {/* <Footer2/> */}
    </div>
  );
};

export default Dashboard;