import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

import FinStreet_logo from "../assets/Finstreet-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const { userData,backendUrl,setUserData,isLoggedIn,setIsLoggedIn } = useContext(UserContext);

  const handleLogout = async() => {
    try{
      axios.defaults.withCredentials = true;
      const {data} = await axios.post(`${backendUrl}/api/auth/logout`);
      data.success && setIsLoggedIn(false);
      data.success && setUserData(null);
      toast.success(data.message);
      navigate('/');
    }catch(error){
      toast.error(error.message);
    }
  };

  const handleToggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const renderMenuItems = () => (
    <>
      <li>
        <Link to="/" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/schedule" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
          Calendar
        </Link>
      </li>
      <li>
        <Link to="/events" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
          Events
        </Link>
      </li>
      {userData ? (
        <>
          {/* For Large Devices: User Icon with Dropdown */}
          <li className="hidden lg:block relative" ref={dropdownRef}>
            <button onClick={handleToggleDropdown} className="w-8 h-8 flex justify-center items-center rounded-full
            bg-white text-black relative group hover:bg-cyan-400">
               {userData.name[0].toUpperCase()}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      to="/user/dashboard"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-left w-full hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {/* For Small Devices: Show Dashboard and Logout in Menu */}
          <li className="lg:hidden">
            <Link to="/user/dashboard" className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li className="lg:hidden">
            <button onClick={handleLogout} className="hover:text-cyan-400">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/user/login"} className="hover:text-cyan-400" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white bg-opacity-75 py-3 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link to="/" rel="noopener noreferrer">
            <img src={FinStreet_logo} alt="Finstreet Logo" className="w-12" />
          </Link>
          <h1 className="text-4xl">
            <span className="text-yellow-400">Fin</span>
            <span className="street-font">Street</span>
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Navigation Links for Large Screens */}
        <ul className="hidden lg:flex lg:gap-8 lg:items-center text-lg font-medium">
          {renderMenuItems()}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 text-lg font-medium bg-opacity-75 py-6 px-4">
          <ul className="flex flex-col items-center gap-6 w-full">{renderMenuItems()}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
