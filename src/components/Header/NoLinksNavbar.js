import React from 'react';
import { 
    Nav,
    Logo,
    LogoLink
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
