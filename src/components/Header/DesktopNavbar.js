import React from 'react';
import { 
    Burger,
    Nav,
    Logo,
    NavLinks,
    NavLink,
    Home 
} from './desktopNavbar.styles';

const DesktopNavbar = ({displayMobileNavbar, setDisplayMobileNavbar}) => {
    return (
        <Nav>
            <Logo>
                <h4>Pennylane Apartments</h4>
            </Logo>
            <NavLinks displayMobileNavbar={displayMobileNavbar}>
                <Home 
                    to="/"
                    onClick={() => setDisplayMobileNavbar(false)}
                >
                    Home
                </Home>
                <NavLink
                    activeClass="active"
                    to="apartments"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}
                >
                    Apartments
                </NavLink>
                <NavLink
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}
                >
                    Services
                </NavLink>
                <NavLink
                    activeClass="active"
                    to="location"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}
                >
                    Location
                </NavLink>
                <NavLink
                    activeClass="active"
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}
                >
                    Contact Us
                </NavLink>
            </NavLinks>
            <Burger onClick={() => setDisplayMobileNavbar(!displayMobileNavbar)}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </Burger>
        </Nav>
    )
}

export default DesktopNavbar
