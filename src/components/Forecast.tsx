import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, Clock, MapPin, Thermometer } from "lucide-react";
import { motion } from "framer-motion";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Reusable Button Component
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    className="bg-blue-700 dark:bg-blue-900 hover:bg-blue-600 dark:hover:bg-blue-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105 shadow-md"
    {...props}
  >
    {children}
  </button>
);

// Reusable Select Component
const Select = ({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
  >
    {children}
  </select>
);

const Forecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState("New Delhi, India");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("12:00");

  const cityCoordinates: { [key: string]: { lat: string; lon: string } } = {
    "New Delhi, India": { lat: "28.6139", lon: "77.2090" },
    "Mumbai, India": { lat: "19.0760", lon: "72.8777" },
    "Chennai, India": { lat: "13.0827", lon: "80.2707" },
    "Kolkata, India": { lat: "22.5726", lon: "88.3639" },
  };

  const fetchForecastData = async () => {
    try {
      setLoading(true);
      const { lat, lon } = cityCoordinates[location];
      const response = await axios.get(
        `https://api.meteomatics.com/${date}T${time}:00Z--${date}T${time}:00Z:PT1H/t_2m:C/${lat},${lon}/json`,
        {
          auth: {
            username: "presidencyuniversity_kumar_hemanth",
            password: "96AIh7Wxon",
          },
        }
      );
      setForecastData(response.data.data[0].coordinates[0].dates);
    } catch (err) {
      setError("Failed to fetch forecast data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecastData();
  }, [location, date, time]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-darkblue-900 via-gray-900 to-gray-800 text-gray-200 transition-colors duration-500 pt-24">
      <motion.div
        className="max-w-4xl w-full p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-2xl rounded-3xl mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-10 text-center"
          initial={{ opacity: 0, y: -30, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotateX: 10 }}
        >
          Weather Forecast for {location}
        </motion.h2>

        {/* Input Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-gray-500" />
            <Select value={location} onChange={(value) => setLocation(value)}>
              {Object.keys(cityCoordinates).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-gray-500" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-gray-500" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Weather Cards */}
        {loading ? (
          <div className="text-center text-lg py-10">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forecastData &&
              forecastData.map((forecast: any, index: number) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-r from-blue-800 to-purple-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-100">
                    {new Date(forecast.date).toLocaleString("en-US", {
                      weekday: "long",
                      hour: "numeric",
                      day: "numeric",
                      month: "short",
                    })}
                  </h3>
                  <div className="flex items-center gap-2 mt-4">
                    <Thermometer className="text-yellow-500" />
                    <p className="text-2xl font-bold text-yellow-300">
                      {forecast.value}°C
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </motion.div>
      {/* 3D Map Card */}
      <motion.div
        className="w-full max-w-4xl h-[400px] bg-gradient-to-br from-blue-900 to-gray-800 shadow-xl rounded-3xl overflow-hidden mt-10 transform transition duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Map
          initialViewState={{
            latitude: parseFloat(cityCoordinates[location].lat),
            longitude: parseFloat(cityCoordinates[location].lon),
            zoom: 10,
            pitch: 45,
            bearing: 0,
          }}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          terrain={{ source: "mapbox-dem", exaggeration: 1.5 }}
          mapboxAccessToken="06e4a570c605661c76165632a48240fa"
        >
          <Marker
            latitude={parseFloat(cityCoordinates[location].lat)}
            longitude={parseFloat(cityCoordinates[location].lon)}
          >
            <MapPin className="text-red-500" size={30} />
          </Marker>
        </Map>
      </motion.div>
    </div>
  );
};

export default Forecast;
