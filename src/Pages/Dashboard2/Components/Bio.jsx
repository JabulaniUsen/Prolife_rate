import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Bio() {
  const [bio, setBio] = useState(''); // State to store the bio content
  const [editMode, setEditMode] = useState(false); // State to track whether in edit mode

  const handleEditSaveClick = () => {
    if (editMode) {
      // Save button clicked, handle save logic here (e.g., send to server)
      // For now, we'll just log the bio content
      console.log('Bio saved:', bio);
    }
    setEditMode(!editMode); // Toggle edit mode
  };

  return (
    <div className='p-9 rounded-xl shadow'>
      <h3 className="poppins font-semibold text-2xl">Bio</h3>
      <textarea
        name="bio"
        id="bio"
        className={`mt-5 inter w-full outline-none lg:h-[200px] h-[120px] lg:max-h-[250px] ${editMode ? 'border' : 'border-none'}`}
        placeholder='Add bio e.g "My name is Tunde Adeyemi with 6 years of teaching experience as an English teacher at..."'
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        readOnly={!editMode}
      />
      <button
        className={`inter hover:transition-all px-4 py-2 mt-3 text-blue-600 rounded-md  ${editMode ? 'bg-[#c5c5c5]' : 'bg-[#e2e2e2]'}`}
        onClick={handleEditSaveClick}
      >
        {editMode ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>}
      </button>
    </div>
  );
}

export default Bio;
