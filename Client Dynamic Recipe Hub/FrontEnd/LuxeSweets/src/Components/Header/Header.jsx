import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#f5f3f0] border-b-2 border-[#a0785d] shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/"
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/419/556/original/sweet-sugar-chocolate-cake-black-forest-western-food-dessert-3d-render-icon-illustration-isolated-png.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#5f4b3a]">
              LuxeSweets
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              to="/signup"
              type="button"
              className="text-white bg-[#a0785d] hover:bg-[#8f6c49] focus:ring-4 focus:outline-none focus:ring-[#7a5c3f] font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-[#8f6c49] focus:outline-none focus:ring-2 focus:ring-[#7a5c3f]"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#a0785d] rounded-lg bg-[#feefda] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#f5f3f0]">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <Link to="contactUs"
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
