import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import googleLogo from "../assets/google-logo.svg";
import UserContext from "../context/UserContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "" 
  });

  const {backendUrl,setIsLoggedIn,getUserData} = useContext(UserContext);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required.";
    if (!formData.password) formErrors.password = "Password is required.";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    axios.defaults.withCredentials = true;
    try {
      const URL = `${backendUrl}/api/auth/login`;
      const response = await axios.post(URL, formData);

      if(response.data.success) {
        setIsLoggedIn(true);
        getUserData();
        
        toast.success("Login successful!");
        setFormData({ email: "", password: "" });

        // Redirect after login
        setTimeout(() => navigate(-1), 1000); // Replace "/dashboard" with your intended route
      } else {
        toast.error(response.data.message || "Login failed.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred.");
      } else {
        toast.error("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-md sm:mx-auto">
        <div className="relative px-6 py-8 bg-transparent shadow-lg sm:rounded-3xl">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl text-orange-white font-semibold">Login</h1>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSubmit}
                className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer h-10 w-full border-b-2 p-2 rounded-lg border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
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
                <p className="text-sm text-white">
                  New User? Click{" "}
                  <Link to="/user/register" className="text-red-600 underline">
                    Sign Up
                  </Link>
                </p>
                <div className="relative">
                  <button className="bg-blue-400 hover:bg-blue-600 text-white rounded-md px-6 py-2">
                    Login
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

export default Login;
