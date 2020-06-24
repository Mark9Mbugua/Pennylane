import React from 'react';
import Apartments from '../components/Apartments/Apartments';
import ContactUs from '../components/ContactUs/ContactUs';
import Home from '../components/Home/Home';
import Location from '../components/Location/Location';
import Services from '../components/Services/Services';

const Main = () => {
    return (
        <div>
            <Home />
            <Apartments />
            <Services />
            <Location />
            <ContactUs />  
        </div>
    )
}

export default Main
