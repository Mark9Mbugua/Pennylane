import React from 'react';
import { 
    Nav,
    Logo,
    NavLinks,
    NavLink 
} from './header.styles';

const Header = () => {
    return (
        <Nav>
            <Logo>
                <h4>Pennylane Apartments</h4>
            </Logo>
            <NavLinks>
                <li>
                    <NavLink  href='#'>Home</NavLink >
                </li>
                <li>
                    <NavLink href='#'>Apartments</NavLink>
                </li>
                <li>
                    <NavLink href='#'>Ammenities</NavLink>
                </li>
                <li>
                    <NavLink href='#'>Location</NavLink>
                </li>
                <li>
                    <NavLink href='#'>Contact Us</NavLink>
                </li>
            </NavLinks>
        </Nav>
    )
}

export default Header
