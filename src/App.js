import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Apartments from './components/Apartments/Apartments.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Location from './components/Location/Location.js';
import Ammenities from './components/Ammenities/Ammenities.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Apartments />
      <Ammenities />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
