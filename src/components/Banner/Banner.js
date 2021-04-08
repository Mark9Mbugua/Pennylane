import React from 'react';
import { 
    CustomBanner,
    DetailLine 
} from './banner.styles';

const Banner = ({children,title,subtitle}) => {
    return (
        <CustomBanner>
            <h1>{title}</h1>
            <DetailLine />
            <p>{subtitle}</p>
            {children}  
        </CustomBanner>
    );
}

export default Banner
