import React, { useState } from "react";
import {
  FaGoogle,
  FaLinkedin,
  FaEnvelope,
  FaLock,
  FaUser,
  FaGithub,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../Utils/loginSlice";

const LoginSignup = () => {
  const isLoginForm = useSelector((store) => store.login.isLogin);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};

    // Name validation (letters only)
    if (!isLoginForm && !/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      errors.name = "Name should contain letters only.";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Enter a valid email address.";
    }

    // Password validation (uppercase, lowercase, number, and special characters)
    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (
      !/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
    }

    // Confirm Password Validation
    if (!isLoginForm && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleClick = () => {
    dispatch(toggleForm(!isLoginForm));
    setFormErrors({});
  };

  return (
    <div className="max-w-md mx-auto shadow-md rounded-md p-6 bg-white">
      <h2 className="text-xl font-bold mb-4 text-center text-gradient">
        {isLoginForm ? "Login" : "SignUp"} for MockSkills
      </h2>

      {/* Social Login Buttons */}
      <div className="mb-4">
        <button className="w-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md py-2 mb-2 text-sm shadow hover:shadow-md transition">
          <FaGoogle className="mr-2" />
          {isLoginForm ? "Login with Google" : "SignUp with Google"}
        </button>
        <button className="w-full flex items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white rounded-md py-2 text-sm shadow hover:shadow-md transition">
          <FaGithub className="mr-2" />
          {isLoginForm ? "Login with GitHub" : "SignUp with GitHub"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name Field (SignUp Only) */}
        {!isLoginForm && (
          <div className="mb-3">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full pl-10 pr-4 py-2 border ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring ${
                  formErrors.name ? "focus:ring-red-200" : "focus:ring-blue-200"
                } text-sm`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>
          </div>
        )}

        {/* Email Field */}
        <div className="mb-3">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={`w-full pl-10 pr-4 py-2 border ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                formErrors.email ? "focus:ring-red-200" : "focus:ring-blue-200"
              } text-sm`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full pl-10 pr-4 py-2 border ${
                formErrors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                formErrors.password
                  ? "focus:ring-red-200"
                  : "focus:ring-blue-200"
              } text-sm`}
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
            )}
          </div>
        </div>

        {/* Confirm Password Field (SignUp Only) */}
        {!isLoginForm && (
          <div className="mb-4">
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`w-full pl-10 pr-4 py-2 border ${
                  formErrors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring ${
                  formErrors.confirmPassword
                    ? "focus:ring-red-200"
                    : "focus:ring-blue-200"
                } text-sm`}
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md py-2 text-sm shadow hover:shadow-md transition"
        >
          {isLoginForm ? "Login" : "SignUp"}
        </button>
      </form>

      <p className="text-center text-gray-500 mt-3 text-sm">
        {isLoginForm ? "Don't" : "Already"} have an account?{" "}
        <a
          href="#"
          className="text-gradient hover:underline font-semibold"
          onClick={handleClick}
        >
          {isLoginForm ? "SignUp" : "Login"} here
        </a>
      </p>
    </div>
  );
};

export default LoginSignup;
