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
import NoLinksNavbar from '../components/Header/NoLinksNavbar';
import Slider from '../components/Slider/Slider';
import { DetailsContainer } from './apartmentDetail.styles';
import { TwoBedroomPhotos } from '../data/TwobedroomData';
import twoBd from '../images/2bdexterior2-min.jpg';

const TwoBedroom = () => { 
    const { pathname } = useLocation();
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <>
            <NoLinksNavbar />
            <ApartmentContainer>
                <ApartmentHero coverImage={twoBd}>
                    <Banner title='Two Bedroom Penthouse'>
                        <CustomLink to={`/`}>Back Home</CustomLink> 
                    </Banner>
                </ApartmentHero>
                <Slider images={TwoBedroomPhotos} />
                <DetailsContainer>
                    <Details>
                        <h3>Apartment Details</h3>
                        <p>We have quite the spacious living room. The two bedrooms are equally as spacious
                        and the master has ensuite bathroom with shower.
                        A modern kitchen to serve your home with two balconies that offer a serene view of 
                        Banana and its surroundings.The kitchen also houses a spacious store.</p>
                    </Details>
                    <Info>
                        <h3>Info</h3>
                        <p>Rent: Ksh.35,000</p>
                        <p>Bedrooms: 2</p>
                        <p>Restrooms: 2</p>
                        <p>Shower: 2</p>
                        <p>Store: 1</p>
                        <p>Tenancy requirements: Deposit + Rent = Ksh.70,000</p>
                        <p>Balconies: 2</p>
                    </Info>
                </DetailsContainer>         
            </ApartmentContainer>
        </>
    );
}

export default TwoBedroom  