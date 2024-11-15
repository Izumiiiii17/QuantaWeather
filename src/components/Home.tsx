import React from "react";
import WeatherCard from "../components/WeatherCard";
import NewsBanner from "../components/NewsBanner";

function Home() {
  return (
    <main className="pt-16 px-4 lg:px-8 animate-fadeIn max-w-7xl mx-auto">
      {/* Video Card Section */}
      <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-8 mt-8">
        {" "}
        {/* Add margin-top */}
        <video
          src="https://cdn.pixabay.com/video/2016/01/29/1992-153555258_large.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fadeInUp">
            {" "}
            {/* Apply fade-in animation */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">
              "Quantum Technology Meets Climate Science"
            </h1>
            <p className="text-md lg:text-lg font-medium">
              Revolutionizing weather forecasts with precision and speed.
            </p>
          </div>
        </div>
      </div>

      {/* Weather Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        <WeatherCard
          location="New Delhi"
          temperature={23}
          condition="Partly Cloudy"
          humidity={65}
          windSpeed={12}
        />
        <WeatherCard
          location="Mumbai"
          temperature={18}
          condition="Sunny"
          humidity={55}
          windSpeed={8}
        />
        <WeatherCard
          location="Chennai"
          temperature={30}
          condition="Rainy"
          humidity={75}
          windSpeed={10}
        />
        <WeatherCard
          location="Bangalore"
          temperature={35}
          condition="Sunny"
          humidity={79}
          windSpeed={12}
        />
      </div>

      {/* News Banners Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        <NewsBanner
          title="Quantum Weather Prediction"
          description="How quantum computing is revolutionizing weather forecasting"
          imageUrl="https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=800&q=80"
        />
        <NewsBanner
          title="Climate Science Update"
          description="Latest breakthroughs in atmospheric modeling"
          imageUrl="https://images.unsplash.com/photo-1542641728-6ca359b085f4?auto=format&fit=crop&w=800&q=80"
        />
        <NewsBanner
          title="Global Warming Effects"
          description="Understanding the impact of global warming on our planet"
          imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
        />
        <NewsBanner
          title="Weather Patterns and You"
          description="How weather patterns affect daily life"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiqJ4P_DqSmp_JUtQhO2Uz5YU5GFxha7VhA&s"
        />
      </div>

      {/* Additional Information Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Future Weather Trends
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Discover insights into future climate models and how they can
            predict extreme weather conditions.
          </p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Impact of Climate Change
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Explore the impacts of climate change on ecosystems, biodiversity,
            and human health.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
