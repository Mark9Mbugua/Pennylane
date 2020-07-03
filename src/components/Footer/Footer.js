import React from 'react';
import { 
    FooterSection,
    FooterInfo
 } from './footer.styles';

const Footer = () => {
    return (
        <FooterSection>
            <FooterInfo>
              &copy;{new Date().getFullYear()} Pennylane. All Rights Reserved
            </FooterInfo>
        </FooterSection>
    )
}

export default Footer