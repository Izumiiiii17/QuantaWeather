import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Forecast from "./components/Forecast";
import WeatherPrediction from "./components/WeatherPrediction";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set default to true for dark mode

  // Ensure dark theme is applied by default on page load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        } transition-colors duration-300`}
      >
        {/* Header with Theme Toggle */}
        <Header
          onThemeToggle={() => {
            setIsDarkMode(!isDarkMode);
            if (!isDarkMode) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
          isDarkMode={isDarkMode}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/weather-prediction" element={<WeatherPrediction />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;