import React, { createContext, useEffect, useState, useContext } from 'react';
import { AuthDataContext } from './AuthContext';
import axios from 'axios';

//  Capitalized for clarity and convention


export const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const { serverUrl } = useContext(AuthDataContext);
  const [userData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/currentuser`);
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = { userData, setUserData };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider };
