import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const UserContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const [userData, setUserData] = useState(() => {
    const userCookie = Cookies.get('userData');
    return userCookie ? JSON.parse(userCookie) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('isLoggedIn'));

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
      if (data.success) {
        setIsLoggedIn(true);
        Cookies.set('isLoggedIn', 'true', { expires: 7 }); 
        getUserData();
      } else {
        handleLogout();
      }
    } catch (error) {
      toast.error(error.message);
      handleLogout();
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`);
      if (data.success) {
        setUserData(data.userData);
        Cookies.set('userData', JSON.stringify(data.userData), { expires: 7 });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    Cookies.remove('userData');
    Cookies.remove('isLoggedIn'); 
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    getUserData,
    handleLogout,
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
