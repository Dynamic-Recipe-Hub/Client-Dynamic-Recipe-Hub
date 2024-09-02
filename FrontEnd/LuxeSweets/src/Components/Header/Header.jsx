import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#b0956e] border-[#a07d5c]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.discordapp.com/attachments/1279794719647469711/1280110243552165941/Pink_Cute_Pudding_Dessert_Logo.png?ex=66d6e311&is=66d59191&hm=c7d8e14d3ac659e993d655efa3d9754bd137cd71b193bc558ab523d7ebb46d6d&"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-[#a0785d] hover:bg-[#8f6c49] focus:ring-4 focus:outline-none focus:ring-[#7a5c3f] font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </button>
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
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#c5a87d] rounded-lg bg-[#d1b89b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#b0956e]">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-[#8f6c49] md:hover:bg-transparent md:hover:text-[#ffffff] dark:text-white dark:hover:bg-[#b0956e]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-[#8f6c49] md:hover:bg-transparent md:hover:text-[#ffffff] dark:text-white dark:hover:bg-[#b0956e]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-[#8f6c49] md:hover:bg-transparent md:hover:text-[#ffffff] dark:text-white dark:hover:bg-[#b0956e]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-[#8f6c49] md:hover:bg-transparent md:hover:text-[#ffffff] dark:text-white dark:hover:bg-[#b0956e]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
