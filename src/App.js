import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Apartments from './components/Apartments/Apartments';
import ContactUs from './components/ContactUs/ContactUs';
import Location from './components/Location/Location';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Apartments />
      <Services />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
