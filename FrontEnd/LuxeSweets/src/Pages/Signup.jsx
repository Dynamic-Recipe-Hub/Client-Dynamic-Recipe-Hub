import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // شرط أن تكون كلمة المرور تحتوي على 8 أحرف على الأقل
    return password.length >= 8;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });

      document.cookie = `token=${response.data.token}; path=/`;
      navigate("/home");
    } catch (error) {
      setErrorMessage("Account creation failed. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-[url('/src/assets/sweets-bg.jpg')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center ">
        <Link to="/">
          <img
            src="/src/assets/sweets-logo.png"
            className="h-36 w-40 transition-transform duration-300 hover:scale-110"
            alt="Sweets Logo"
          />
        </Link>
        <div className="w-full max-w-md p-8 bg-[#b0956e] bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl mb-6 text-center">
            Create Account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-white"
              >
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-pink-800" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-pink-100 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-pink-800" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@gmail.com"
                  className="bg-pink-100 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-pink-800" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-pink-100 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-pink-800" />
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-pink-100 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-pink-300"
            >
              Sign Up
            </button>

            <p className="text-sm font-normal text-white flex justify-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-pink-600 hover:underline ml-2"
              >
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Signup;
