// Navbar.jsx

import React, { useState } from 'react';
// It's good practice to import any icons you might use.
// For this example, we'll use a simple text logo and a hamburger icon for mobile.
// You can replace 'MenuIcon' and 'XIcon' with actual icon components from a library like 'lucide-react' or SVGs.

// Placeholder for Menu Icon (e.g., from lucide-react or other icon library)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Placeholder for Close Icon (e.g., from lucide-react or other icon library)
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Navbar = () => {
  // State to manage the mobile menu's open/close status
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation links data
  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
    // Add more links as needed
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-25 bg-transparent text-gray font-inter">
      <div className="container mx-auto px-4">
        {/* Main Navbar content: Logo and Desktop Menu */}
        <div className="flex flex-col items-center py-4">
          {/* Logo Section */}
          <div className="mb-4">
            {/* Replace this with your actual logo. It can be an <img> tag or an SVG. */}
            <a href="#home" className="text-3xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
              
            </a>
          </div>

          {/* Desktop Navigation Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-teal-300 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (visible on small screens) */}
          <div className="md:hidden flex items-center absolute top-4 right-4">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered based on state) */}
      {/* The 'md:hidden' class ensures this menu is only for mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-teal-300 w-full text-center transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// How to use it in your App.js or any other parent component:
// 1. Make sure you have React and Tailwind CSS setup in your project.
// 2. Import the Navbar component.
// 3. Include the Navbar component in your App component's JSX.

// Example App.js:
// import React from 'react';
// import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same folder or adjust path

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* Other content of your application */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Main Content Area
//           </h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           {/* Replace with your actual content */}
//           <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center">
//               Your page content goes here. The Navbar is above.
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
// export default App;

export default Navbar;
