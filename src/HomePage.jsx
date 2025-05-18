import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-off-white"> {/* Changed bg-gray-100 to a conceptual bg-off-white */}
      {/* Off-white background section (two-thirds) */}
      <div className="absolute left-0 top-0 h-full w-2/3 bg-off-white z-0"></div> {/* Conceptual bg-off-white */}

      {/* Dark blue container section (one-third on the right) */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gray-800 flex flex-col justify-center items-start p-12 text-white z-10"> {/* Conceptual bg-dark-blue */}
        <h2 className="text-2xl font-bold mb-8">Classic Elegance</h2>
        <p className="text-base mb-20 leading-relaxed">
          Experience the timeless allure of driving a meticulously maintained classic car.
          Our collection offers unparalleled style and a journey back in time.
          Perfect for special occasions or a memorable weekend getaway.
        </p>
        {/* Video Embed Placeholder */}
        <div className="w-full h-48 bg-gray-700 mb-6 flex items-center justify-center">
          <span className="text-gray-400">Video Placeholder</span>
        </div>
        <a
          href="/cars/classic-model" // Replace with your actual link in the future
          className="text-lg font-semibold hover:underline text-light-blue" // Conceptual text-light-blue
        >
          Discover More
        </a>
      </div>

      {/* Centered Classic Car Image */}
      <div className="relative z-20 max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <img
          src="src\assets\WhatsApp_Image_2025-05-18_at_7.55.34_AM-removebg-preview.png" // Add your car image path here
          alt="Classic Car"
          className="object-fill w-full h-auto max-h-[70vh] drop-shadow-2xl"
          style={{ transform: 'translateX(-10%)' }} // Adjust this percentage to control the overlap
        />
      </div>
      <h1 className="fixed bottom-20 left-50 right-0 z-10 text-8xl italic monsieur-la-doulaise-regular">"Betty"</h1>
      <p className="fixed top-60 left-50 right-0 text-xl monsieur-la-doulaise-regular">Experience the timeless allure of driving a meticulously maintained classic car.<br></br>
          Our collection offers unparalleled style and a journey back in time.<br></br>
          Perfect for special occasions or a memorable weekend getaway.</p>
    </div>
  );
};    

export default HomePage;