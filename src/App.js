import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Apartments from './components/Apartments/Apartments';
import ContactUs from './components/ContactUs/ContactUs';
import Location from './components/Location/Location';
import Ammenities from './components/Ammenities/Ammenities';
import Footer from './components/Footer/Footer';

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
