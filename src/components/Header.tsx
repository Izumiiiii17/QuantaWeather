import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSearch,
  FaCloudSun,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

interface HeaderProps {
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, isDarkMode }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } shadow-md transition-colors duration-300 ease-in-out animate-fadeIn`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="src/components/Screenshot_2024-11-14_192041-removebg-preview.png"
            alt="Logo"
            className="w-7 h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 animate-fadeInLeft"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
            QuantaWeather
          </h1>
        </div>

        {/* Right Section: Navigation Links, Search, and Theme Toggle */}
        <div className="flex items-center space-x-4 animate-fadeInRight">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base`
              }
            >
              <FaHome className="mr-1" /> Home
            </NavLink>
            <NavLink
              to="/weather-prediction"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base`
              }
            >
              <FaCloudSun className="mr-1" /> Weather Prediction
            </NavLink>
            <NavLink
              to="/forecast"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base`
              }
            >
              <FaChartLine className="mr-1" /> Forecast
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base`
              }
            >
              <FaInfoCircle className="mr-1" /> About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base`
              }
            >
              <FaEnvelope className="mr-1" /> Contact
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                } hover:text-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 text-base`
              }
            >
              <FaCogs className="mr-1" /> Settings
            </NavLink>
          </nav>

          {/* Compact Search Bar */}
          <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 space-x-2 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-20 md:w-32 bg-transparent text-sm text-gray-800 dark:text-gray-100 focus:outline-none"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition duration-300 ease-in-out transform hover:rotate-180"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-500 animate-spin-slow" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-500 animate-spin-slow" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
