import React from 'react';

import { NoLinksNav } from './noLinksNavbar.styles';

import { 
    Logo,
    LogoLink
} from './mainNavbar.styles';

const NoLinksNavbar = () => {
    return (
        <NoLinksNav>
            <Logo>
                <LogoLink to='/'>Pennylane Apartments</LogoLink>
            </Logo>  
        </NoLinksNav>
    )
}

export default NoLinksNavbar
