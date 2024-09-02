import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:1001/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
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
            Log In
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
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
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#a0785d] to-[#b0956e] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#a0785d]"
            >
              Log In
            </button>

            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                className="w-full flex items-center justify-center bg-white text-[#a0785d] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gray-100"
              >
                <FaGoogle className="mr-2" />
                Log In with Google
              </button>
            </div>

            <p className="text-sm font-light text-gray-500 flex justify-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#a0785d] hover:underline ml-2"
              >
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
