import React from 'react';
import Navbar from './NavBar'; // Assuming Navbar.jsx is in the same folder or adjust path
import HomePage from './HomePage';
import SlidingDrawer from './SlidingDrawer';

function App() {
   return (
     <div className="App">
       <Navbar />
       
       <SlidingDrawer />
     </div>
   );
 }
 export default App;
