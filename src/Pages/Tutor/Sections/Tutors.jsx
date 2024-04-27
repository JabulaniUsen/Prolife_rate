import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
  

const Tutors = () => {
    const [displayedMentors, setDisplayedMentors] = useState([]);
    const [allMentors, setAllMentors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('all'); // Default to 'all'
    const tutorsPerPage = 12;

    ///////////////
    const totalPages = Math.ceil(allMentors.length / tutorsPerPage);
  
    const startIndex = (currentPage - 1) * tutorsPerPage;
    const endIndex = currentPage * tutorsPerPage;
  
    const currentTutors = displayedMentors.slice(startIndex, endIndex);

    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    
        switch (tab) {
          case 'all':
            setDisplayedMentors(allMentors);
            break;
          case 'kindergarten':
            setDisplayedMentors(kindergartenMentors);
            break;
          case 'highSchool':
            setDisplayedMentors(highSchoolMentors);
            break;
          case 'college':
            setDisplayedMentors(collegeMentors);
            break;
          case 'technology':
            setDisplayedMentors(technologyMentors);
            break;
          default:
            setDisplayedMentors(allMentors);
        }
      };

      const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  useEffect(() => {
    // Fetch data from API
    axios.get('https://proliferate-backend.onrender.com/api/tutor/find-tutors/')
        .then(response => {
            setAllMentors(response.data); // Set all mentors data
            setDisplayedMentors(response.data); // Initially display all mentors
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

  return (
    <div className='poppins my-10 flex flex-col px-5 lg:px-28'>
    
    <div className="search px-0 lg:px-28 m-auto ">
        <div className='border-2 flex justify-center lg:pl-7 pl-5 rounded-xl lg:w-[90%] w-[350px]'>
            <select id="dropdown"  className='text-slate-400 w-[90px] pl-4' value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Subject</option>
                <option value="option1">Kindergarten</option>
                <option value="option2">High School</option>
                <option value="option3">College</option>
                <option value="option3">Technology</option>
            </select>
            <select id="dropdown" className='text-slate-400 px-2 hidden lg:block' value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Grades</option>
                <option value="option1">100%</option>
                <option value="option3">90%</option>
                <option value="option2">80%</option>
                <option value="option3">70%</option>
                <option value="option3">60%</option>
                <option value="option3">50%</option>
                <option value="option3">40%</option>
                <option value="option3">30%</option>
                <option value="option3">20%</option>
                <option value="option3">10%</option>
            </select>
            <input type="text" className='w-[400px]' />
            <button type="submit" className='bg-[#186BAD] text-white lg:px-10 lg:py-4 px-5 py-2 rounded-r-lg'>Search</button>
        </div>
    </div>

      <div className="tabs lg:flex hidden justify-left items-center gap-20 py-9 ">
        <h2 onClick={() => handleTabClick('all')} className={activeTab === 'all' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>All Mentor</h2>
        <h2 onClick={() => handleTabClick('kindergarten')} className={activeTab === 'kindergarten' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For Kindergarten</h2>
        <h2 onClick={() => handleTabClick('highSchool')} className={activeTab === 'highSchool' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For High School</h2>
        <h2 onClick={() => handleTabClick('college')} className={activeTab === 'college' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For College</h2>
        <h2 onClick={() => handleTabClick('technology')} className={activeTab === 'technology' ? 'text-white bg-red-600 p-3 px-5 rounded-lg cursor-pointer' : 'cursor-pointer'}>For Technology</h2>
      </div>

            {/* All Tutors */}
            {activeTab === 'all' && (
              <Link to='/tutordetail/#'>
                <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                  {currentTutors.map((tutor) => (
                    <li key={tutor.id} className='lg:w-[270px] w-[200px] hover:shadow-md p-5'>
                      <img src={tutor.image} alt="" />
                      <h3 className='text-[#186BAD] mt-2 text-lg'>{tutor.name}</h3>
                      <small>{tutor.course}</small>
                    </li>
                  ))}
                </ul>
              </Link>
            )}

            {/* Kindergarten */}
            {activeTab === 'kindergarten' && (
              <ul className='flex flex-row flex-wrap justify-center gap-10'>
                {displayedMentors.map((mentor) => (
                  <li key={mentor.id}>
                    <img src={mentor.image} alt="" />
                    <h3 className='text-[#186BAD] font-bold text-lg'>{mentor.name}</h3>
                    <small>{mentor.course}</small>
                  </li>
                ))}
              </ul>
            )}

      {/* Similar blocks for other tabs with different content here*/}

      <div className='mt-4 flex justify-center items-center py-10'>
        <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ opacity: currentPage === 1 ? 0.5 : 1 }} className={`mr-2 border-2 p-2 px-4 rounded-lg bg-[#F2E5FF] active:bg-[#186BAD] text-[#186BAD] active:text-[#fff]`}>
          <FontAwesomeIcon icon={faAngleLeft} className='' />
        </button>
        
        <p className="mx-2 text-[#186BAD]">
          Page {currentPage}   of   {totalPages}
        </p>

        <button onClick={handleNextPage} disabled={currentPage === totalPages} style={{ opacity: currentPage === totalPages ? 0.5 : 1 }} className={`ml-2 border-2 p-2 px-4 rounded-lg bg-[#F2E5FF] active:bg-[#186BAD] text-[#186BAD] active:text-[#fff]`}>
          <FontAwesomeIcon icon={faAngleRight} className='text-[#186BAD]' />
        </button>
      </div>
    </div>
  );
};

export default Tutors