import React from 'react';
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
import twoBd from '../images/2bdexterior2.jpg'

const TwoBedroom = () => {
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
                        <p>We have quite the spacious living room. The bedrooms are equally spacious
                        furnished with modern closets.The master bedrooom is self-contained.
                        A modern kitchen to serve your home with two balconies that offer a serene view of 
                        Banana and its surroundings.The kitchen also houses a spacious store. 
                        Modern bathrooms and toilets.</p>
                    </Details>
                    <Info>
                        <h3>Info</h3>
                        <p>Rent: Ksh.35,000</p>
                        <p>Bedrooms: 2</p>
                        <p>Toilets: 2</p>
                        <p>Bathrooms: 2</p>
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