import React from 'react';
import { 
    Nav,
    Logo,
    NavLinks,
    NavLink,
    Home 
} from './header.styles';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <h4>Pennylane Apartments</h4>
            </Logo>
            <NavLinks>
                <Home to="/">
                    Home
                </Home>
                <NavLink
                    activeClass="active"
                    to="apartments"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
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
                >
                    Contact Us
                </NavLink>
            </NavLinks>
        </Nav>
    )
}

export default Header
