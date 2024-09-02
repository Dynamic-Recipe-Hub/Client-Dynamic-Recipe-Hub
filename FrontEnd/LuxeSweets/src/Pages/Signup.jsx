import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
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
      <section className="bg-[#f9f4ef] min-h-screen flex flex-col items-center justify-center ">
        <Link to="/">
          <img
            src="/src/assets/sweets-logo.png"
            className="h-36 w-40 transition-transform duration-300 hover:scale-110"
            alt="Sweets Logo"
          />
        </Link>
        <div className="w-full max-w-md p-8 bg-[#fffaf3] bg-opacity-95 backdrop-blur-md rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#b0956e] md:text-3xl mb-6 text-center">
            Create Account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-[#b0956e]"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-[#f2e5d9] border border-[#b0956e] text-[#b0956e] text-sm rounded-lg focus:ring-[#b0956e] focus:border-[#b0956e] block w-full p-2.5"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#b0956e]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                className="bg-[#f2e5d9] border border-[#b0956e] text-[#b0956e] text-sm rounded-lg focus:ring-[#b0956e] focus:border-[#b0956e] block w-full p-2.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-[#b0956e]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-[#f2e5d9] border border-[#b0956e] text-[#b0956e] text-sm rounded-lg focus:ring-[#b0956e] focus:border-[#b0956e] block w-full p-2.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-[#b0956e]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-[#f2e5d9] border border-[#b0956e] text-[#b0956e] text-sm rounded-lg focus:ring-[#b0956e] focus:border-[#b0956e] block w/full p-2.5"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#b0956e] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#a28464] focus:ring-4 focus:outline-none focus:ring-[#b0956e]"
            >
              Sign Up
            </button>

            <p className="text-sm font-normal text-[#b0956e] flex justify-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#b0956e] hover:underline"
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
