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
      const response = await axios.post(
        "http://localhost:1001/api/auth/signup",
        {
          name: username,
          email: email,
          password: password,
        },{ withCredentials: true }
      );
      navigate("/");
    } catch (error) {
      setErrorMessage("Account creation failed. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-[url('/src/assets/sweets-bg.jpg')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
        <Link to="/">
          <img
            src="https://cdn.discordapp.com/attachments/1279794719647469711/1280110243552165941/Pink_Cute_Pudding_Dessert_Logo.png?ex=66d6e311&is=66d59191&hm=c7d8e14d3ac659e993d655efa3d9754bd137cd71b193bc558ab523d7ebb46d6d&"
            className="h-36 w-40 transition-transform duration-300 hover:scale-110"
            alt="Sweets Logo"
          />
        </Link>
        <div className="w-full max-w-md p-8 bg-[#f5f3f0] bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#5f4b3a] md:text-3xl mb-6 text-center">
            Create Account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-[#5f4b3a]"
              >
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-[#a0785d]" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-white border border-[#a0785d] text-[#5f4b3a] text-sm rounded-lg focus:ring-[#a0785d] focus:border-[#a0785d] block w-full pl-10 p-2.5"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#5f4b3a]"
              >
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-[#a0785d]" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@gmail.com"
                  className="bg-white border border-[#a0785d] text-[#5f4b3a] text-sm rounded-lg focus:ring-[#a0785d] focus:border-[#a0785d] block w-full pl-10 p-2.5"
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
                className="block mb-2 text-sm font-medium text-[#5f4b3a]"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-[#a0785d]" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white border border-[#a0785d] text-[#5f4b3a] text-sm rounded-lg focus:ring-[#a0785d] focus:border-[#a0785d] block w-full pl-10 p-2.5"
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
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-[#5f4b3a]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-[#a0785d]" />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-white border border-[#a0785d] text-[#5f4b3a] text-sm rounded-lg focus:ring-[#a0785d] focus:border-[#a0785d] block w-full pl-10 p-2.5"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#a0785d] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
            <p className="text-sm font-light text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#a0785d] hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Signup;