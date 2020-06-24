import React from 'react';
import { 
    FooterSection,
    FooterInfo
 } from './footer.styles';

const Footer = () => {
    return (
        <FooterSection>
            <FooterInfo>
              &copy;{new Date().getFullYear()} Powered by Staxx
            </FooterInfo>
        </FooterSection>
    )
}

export default Footer