import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import { faAngleLeft, faAngleRight, faBell, faChevronDown, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
import user from '../Dashboard2/Icons/user.png'
import menu from '../../Assets/menu.png'

// Import Tab Components
import Classes from './Tabs/Classes';
import Home from './Tabs/Home';
import Assignment from './Tabs/Assignment';
import Settings from './Tabs/Settings';
import Messages from './Tabs/Messages';
import Reports from './Tabs/Reports';
import Footer2 from '../../Components/Footer2';
import { Link } from 'react-router-dom';
import Transactions from './Tabs/Transactions';
import WaitingList from './Components/WaitingList';
import {TutorContext} from '../../context/createContext/useTutor';
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
              ? 'active bg-[#509cdb]'
              : ' flex gap-2 items-center justify-start text-white bg-[#186bad] w-[170px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded'
          }
        > 
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const TutorDashboard = () => {
  const [activeTab, setActiveTab]=useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [email, setEmail]=useState('')
  const {session, Logout}=useContext(UseSessionContext)
  const location=useLocation();
  const [isloading, setIsLaoding]=useState(true);
  const navigate  = useNavigate(); 

  useEffect(() => {
    setIsLaoding(true)
    if(!session&&session.authentication.signin) {
      navigate('/signin')
      return
    }
    else if(session&&session.authentication.user_type!='tutor') {
      navigate('/dashboard')
    }
    setIsLaoding(false)
    
  }, [navigate, session.authentication.signin ,session.authentication.user_type,session.authentication.signin, isloading]);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }
  

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
        label: 'Assignments',
        contentComponent: <Assignment />,
        img: teacher
      },
      {
        label: 'Transactions',
        contentComponent: <Transactions />,
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
      // {
      //   label: 'Messages',
      //   contentComponent: <Messages />,
      //   img: messages
      // }, 
    ];

    const [showAll, setShowAll] = useState(false);

    const handleSeeAllClick = () => {
      setShowAll(!showAll);
    };
  
    return (
    !isloading && <div className="">
      <div className={`flex lg:w-[20%] ${isSidebarVisible ? '' : 'sidebar-hidden'} `}>
        <div className={`sideBar bg-[#2977B5]  flex flex-col items-center px-2 ${isSidebarVisible ? 'flex' : 'hidden'}`}>
          <Link to='/'>
            <div className="logo py-10 px-10">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className=" flex flex-col gap-2 my-20">
            <Tabs tabs={tabs} setActiveTab={setActiveTab} />
          </div>

          <div className="logout">
            <button onClick={()=>Logout('TUTOR')} className="flex gap-2 items-center justify-start text-white bg-[#186bad] w-[200px] py-3 text-sm px-5 hover:bg-[#509cdb] rounded">
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

          <div className="profile poppins flex items-start justify-center py-5 border-t-[1px] my-5 mx-2 border-white">
            <div className="w-[50px]">
              <img src={user} alt="" className='rounded-full' />
            </div>
            <div className="">
              <p className='name text-white text-sm'>{session?.tutorProfile?.profile?.full_name ?? ""}</p> 
                <p className="email text-white text-xs w-[140px]">{session?.tutorProfile?.profile.email??''}</p>
            </div>
            <button className='text-white'><FontAwesomeIcon icon={faRightFromBracket} /></button>
          </div>
        </div>

        <div className="body relative">
          <div className={`header flex lg:justify-end justify-between pt-10 px-5 lg:w-[1050px] bg-white items-center ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
            <div className="menu lg:absolute lg:left-7 w-[50px]" onClick={toggleSidebar}>
              <img src={menu} className="cursor-pointer" alt="" />
            </div>
            <div className="flex items-center gap-5">
              <div className="div lg:w-[200px] border-[2px] rounded-2xl flex items-center gap-2 p-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-400 text-sm" />
                <input type="text" placeholder="Search" className='text-sm' />
              </div>

              <div className="relative">
                <span className="absolute border-white border-[2px] bg-[#186bad] p-[4.5px] rounded-full top-[-2px] right-[0px]"></span>
                <FontAwesomeIcon icon={faBell} className="text-2xl text-[#979797]" />
              </div>

              <div className="user flex items-center gap-1">
                <img src={user} alt="" />
                <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
              </div>
            </div>

          </div>
          <div className="m-auto">
            {tabs[activeTab].contentComponent}
          </div>
        </div>

      </div>
      {showAll && (
        <div className="modal-overlay">
          <button onClick={handleSeeAllClick} className="close-button">
            Close
          </button>
          <WaitingList />
        </div>
      )}
    </div>
  );
};

export default TutorDashboard;
