import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { 
    ApartmentContainer,
    ApartmentHero,
    CustomLink,
    Details,
    Info
} from './apartmentDetail.styles';
import Banner from '../components/Banner/Banner';
import Slider from '../components/Slider/Slider';
import NoLinksNavbar from '../components/Header/NoLinksNavbar';
import { DetailsContainer } from './apartmentDetail.styles';
import { OneBedroomPhotos } from '../data/OneBedroomData';
import oneBd from '../images/one-bd-kitchen-1-min.jpg';

const OneBedroom = (props) => {
    const { pathname } = useLocation();
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    console.log(props);
    return (
        <>
            <NoLinksNavbar />
            <ApartmentContainer>
                <ApartmentHero coverImage={oneBd}>
                    <Banner title='One Bedroom Apartment'>
                        <CustomLink to={`/`}>Back Home</CustomLink> 
                    </Banner>
                </ApartmentHero>
                <Slider images={OneBedroomPhotos}/>
                <DetailsContainer>
                    <Details>
                        <h3>Apartment Details</h3>
                        <p>We have quite the spacious living room and bedroom. A modern kitchen to serve your home with a 
                        spacious store and a balcony.</p>
                    </Details>
                    <Info>
                        <h3>Info</h3>
                        <p>Rent: Ksh.20,000</p>
                        <p>Bedrooms: 1</p>
                        <p>Restrooms: 1</p>
                        <p>Shower: 1</p>
                        <p>Store: 1</p>
                        <p>Tenancy requirements: Deposit + Rent = Ksh.40,000</p>
                        <p>Balcony: 1</p>
                    </Info>
                </DetailsContainer>         
            </ApartmentContainer>
        </>
    );
}

export default OneBedroom  