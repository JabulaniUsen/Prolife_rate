import React, { useState } from 'react';

const AccountDetail = () => {
  const [formData, setFormData] = useState({
    bankName: 'Your Bank',
    accountNumber: '123456789',
    accountName: 'Your Name',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can save the form data here (e.g., make an API call)
    // For this example, we'll just log the data to the console.
    console.log('Form Data Saved:', formData);
  };

  return (
    <div className="mx-auto p-3 bg-gray-50 shadow-md rounded-md mt-8">
      <label className="block lg:text-lg font-semibold poppins mb-2 text-gray-600">
        Bank Name:
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleInputChange}
          readOnly={!isEditing}
          className="w-full border font-normal border-gray-300 p-3 rounded-md mt-1"
        />
      </label>

      <label className="block lg:text-lg font-semibold poppins mb-2 text-gray-600">
        Account Number:
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          readOnly={!isEditing}
          className="w-full border font-normal border-gray-300 p-3 rounded-md mt-1"
        />
      </label>

      <label className="block lg:text-lg font-semibold poppins mb-2 text-gray-600">
        Account Name:
        <input
          type="text"
          name="accountName"
          value={formData.accountName}
          onChange={handleInputChange}
          readOnly={!isEditing}
          className="w-full border font-normal border-gray-300 p-3 rounded-md mt-1"
        />
      </label>

      <div className="mt-4">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountDetail;
