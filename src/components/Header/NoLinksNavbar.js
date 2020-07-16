import React from 'react';
import { 
    Nav,
    Logo,
    LogoLink,
    NavLinks,
    Home 
} from './mainNavbar.styles';

const NoLinksNavbar = () => {
    return (
        <Nav>
            <Logo>
                <LogoLink to='/'>Pennylane Apartments</LogoLink>
            </Logo>  
        </Nav>
    )
}

export default NoLinksNavbar
