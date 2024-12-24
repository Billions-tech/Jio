import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      {/* Top Navigation Bar */}
      <div className="bg-yellow-700 text-white text-sm py-2 px-6 lg:block hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="lg:flex justify-around gap-10 leading-5 items-center">
            <span className="flex gap-1 items-center">
              <MdOutlineMail />
              <a
                href="mailto:jioroyalinn@gmail.com"
                className="hover:text-yellow-400"
              >
                jioroyalinn@gmail.com
              </a>
            </span>
            <span className="flex gap-1 items-center">
              <CiPhone />
              <a href="tel:+2348140063499" className="hover:text-yellow-400">
                081 4006 3499
              </a>
            </span>
            <span className="flex gap-1 items-center">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps?q=NO+2,+AKABAMAN+STREET,+OFF+EWAH+ROAD,+BENIN+CITY"
                className="hover:text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                NO 2, AKABAMAN STREET, OFF EWAH ROAD, BENIN CITY
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="font-bold text-lg">
            <Link to="/">JIO ROYAL HOTEL</Link>
          </h1>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`lg:flex ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:relative top-[60px] lg:h-[30px] lg:top-[0px] h-[300px] items-center p-5 text-center w-full lg:w-auto bg-gray-800 lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li className="py-2 px-4 lg:py-0 lg:px-0">
                <Link
                  to="/"
                  className="block lg:inline-block hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="py-2 px-4 lg:py-0 lg:px-0">
                <Link
                  to="/rooms"
                  className="block lg:inline-block hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rooms
                </Link>
              </li>
              <li className="py-2 px-4 lg:py-0 lg:px-0">
                <Link
                  to="/booking"
                  className="block lg:inline-block hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Booking
                </Link>
              </li>
              <li className="py-2 px-4 lg:py-0 lg:px-0">
                <Link
                  to="/about"
                  className="block lg:inline-block hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
