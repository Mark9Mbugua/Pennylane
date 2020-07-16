import React from 'react';
import Apartments from '../components/Apartments/Apartments';
import ContactUs from '../components/ContactUs/ContactUs';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import Location from '../components/Location/Location';
import Services from '../components/Services/Services';
import { MainContainer } from './main.styles';

const Main = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Home />
                <Apartments />
                <Services />
                <Location />
                <ContactUs />  
            </MainContainer>
        </>
    )
}

export default Main
