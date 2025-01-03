import { useState,useContext } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import {toast,Toaster} from "react-hot-toast";
import googleLogo from "../assets/google-logo.svg";
import UserContext from "../context/UserContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    rollNo: "",
  });

  const [errors, setErrors] = useState({});
  const {backendUrl,setIsLoggedIn,getUserData} = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required.";
    if (!formData.password) formErrors.password = "Password is required.";
    if (!formData.branch) formErrors.branch = "Branch is required.";
    if (!formData.rollNo) formErrors.rollNo = "Roll number is required.";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setErrors({});
  
    const formErrors = validateForm();
  
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    const URL = `${backendUrl}/api/auth/register`;
    axios.defaults.withCredentials = true;
    try {
      
      const response = await axios.post(URL, formData);
      
      if (response.data.success) {
        setIsLoggedIn(true);
        getUserData();
        toast.success(response.data.message);

        setFormData({
          name: "",
          email: "",
          password: "",
          branch: "",
          rollNo: "",
        });
        
        setTimeout(() => navigate("/"), 1000);
      }else{
        toast.success(response.data.message);
      }
  
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred");
        setErrors({ email: error.response.data.message });
      } else {
        toast.error("An unknown error occurred. Please try again.");
      }
    }
  };
  
  
  
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-md sm:mx-auto">
        <div className="relative px-6 py-8 bg-transparent shadow-lg sm:rounded-3xl">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl text-orange-white font-semibold">Sign Up</h1>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSubmit}
                className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer h-10 w-full border-b-2 p-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer h-10 w-full border-b-2 p-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="College Mail ID"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="peer h-10 w-full border-b-2 p-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-600">{errors.password}</p>
                  )}
                </div>
                <div className="flex gap-4">
                  <div className="relative w-1/2">
                    <input
                      id="branch"
                      name="branch"
                      type="text"
                      value={formData.branch}
                      onChange={handleChange}
                      className="peer h-10 w-full border-b-2 p-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Branch"
                    />
                    {errors.branch && (
                      <p className="text-sm text-red-600">{errors.branch}</p>
                    )}
                  </div>
                  <div className="relative w-1/2">
                    <input
                      id="rollNo"
                      name="rollNo"
                      type="text"
                      value={formData.rollNo}
                      onChange={handleChange}
                      className="peer h-10 w-full border-b-2 p-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Roll No."
                    />
                    {errors.rollNo && (
                      <p className="text-sm text-red-600">{errors.rollNo}</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-white">
                  Have an account? Click{" "}
                  <Link to="/user/login" className="text-red-600 underline">
                    Login
                  </Link>
                </p>
                <div className="relative">
                  <button className="bg-blue-400 hover:bg-blue-600 text-white rounded-md px-6 py-2">
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex w-full items-center text-white flex-col mt-5 gap-3">
                <button className="block">
                  <img
                    src={googleLogo}
                    alt="Google Login"
                    className="w-12 h-12 inline-block"
                  />{" "}
                  Login with Google
                </button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Register;
