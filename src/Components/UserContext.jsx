import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');

  const setUserName = (name) => {
    setFullName(name);
  };

  return (
    <UserContext.Provider value={{ fullName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
