import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { faAngleLeft, faAngleRight, faBell, faChevronDown, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo from './Assets/logo.png';
import user from './Assets/user.png'
// Import Tab Components
import Analytics from './Tabs/Analytics'
import Users from './Tabs/Users'
// import Transactions from './Tabs/Transactions';
import Onboarding from './Tabs/Onboarding'
import { Link } from 'react-router-dom';
import Transactions from './Tabs/Transactions';

// Tabs Component
const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="tab-buttons flex flex-col gap-5">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={
            index === activeTab
              ? 'active bg-[#D9D9D9] text-[#186BAD]'
              : ' flex items-center bg-transparent hover:bg-[#D9D9D9] hover:text-[#186BAD] justify-start py-2 px-5 mx-2 rounded text-lg poppins'
          }
        > 
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fullName, setFullName] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Check if the location state contains fullName and email and update the state
    if (location.state) {
      setFullName(location.state.fullName || '');
      setEmail(location.state.email || '');
    }
  }, [location.state]);

  const handleTabClick = (index) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(index);
      setLoading(false);
    }, 2000); // 2 seconds delay
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }
  

    const tabs = [
      {
        label: 'Analytics',
        contentComponent: <Analytics/>
      },
      {
        label: 'Users',
        contentComponent: <Users />
      },
      {
        label: 'Transactions',
        contentComponent: <Transactions />
      },
      {
        label: 'Onboarding',
        contentComponent: <Onboarding />
      } 
    ];
  
    return (
    <div className="">
      <div className={`flex ${isSidebarVisible ? '' : 'sidebar-hidden'} `}>
        <div className={`sideBar bg-[#F2F1F1] w-[354px] rounded-xl m-5 flex flex-col justify-between items-left ${isSidebarVisible ? 'flex' : 'hidden'}`}>
          <Link to='/'>
            <div className="logo p-10">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className=" flex flex-col gap-2">
            <Tabs tabs={tabs} setActiveTab={setActiveTab} />
          </div>

          <div className="p-5 flex items-center gap-2">
            <img src={user} className='w-[50px]' alt="" />
            <div className="">
              <p className="name font-semibold">Jake Seam</p>
              <p className='text-[#898A8B]'>Admin</p>
            </div>
          </div>

          <div className="logout p-5">
            <button className="text-[20px]">
              Logout
            </button>
          </div>
        </div>

        <div className="body px-[30px] relative">
          <div className={`header flex lg:justify-end justify-between pt-10 px-5 lg:w-[1050px] bg-white items-center ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
            <div className="menu lg:absolute lg:left-7 w-[50px]" onClick={toggleSidebar}>
              {/* <img src={menu} className="cursor-pointer" alt="" /> */}
            </div>
            <div className="flex items-center gap-5">
              <div className="div lg:w-[228px] rounded-2xl flex items-center gap-2 p-2 bg-[#faf9f9]">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#898A8B]" />
                <input type="text" placeholder="Quick Search" className='text-sm bg-transparent' />
              </div>

              <div className="relative">
                <FontAwesomeIcon icon={faBell} className="text-2xl text-[#186BAD]" />
              </div>
            </div>

          </div>
          <div className="m-auto">
            {tabs[activeTab].contentComponent}
          </div>
        </div>

      </div>
      {/* <Footer2 /> */}
    </div>
  );
};

export default AdminDashboard;
