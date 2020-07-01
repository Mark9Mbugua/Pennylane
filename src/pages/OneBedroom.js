import React from 'react';
import { 
    ApartmentContainer,
    OneBedroomHero,
    CustomLink,
    Details,
    Info
} from './apartmentDetail.styles';
import Banner from '../components/Banner/Banner';
import Slider from '../components/Slider/Slider';
import { DetailsContainer } from './apartmentDetail.styles';

const OneBedroom = () => {
    return (
        <ApartmentContainer>
            <OneBedroomHero>
                <Banner title='One Bedroom Apartment'>
                    <CustomLink to={`/`}>Back Home</CustomLink> 
                </Banner>
            </OneBedroomHero>
            <Slider />
            <DetailsContainer>
                <Details>
                    <h3>Apartment Details</h3>
                    <p>We have quite the spacious living room. The bedroom is equally spacious
                    furnished with modern closets. A modern kitchen to serve your home with a 
                    balcony that offers a serene view of Banana and its surroundings.The kitchen also 
                    houses a spacious store. Modern bathroom and toilet.</p>
                </Details>
                <Info>
                    <h3>Info</h3>
                    <p>Price: Ksh.20,000</p>
                    <p>Bedrooms: 1</p>
                    <p>Toilet: 1</p>
                    <p>Bathroom: 1</p>
                    <p>Store: 1</p>
                    <p>Tenancy requirements: Deposit + Rent = Ksh.40,000</p>
                </Info>
            </DetailsContainer>         
        </ApartmentContainer>
    );
}

export default OneBedroom  