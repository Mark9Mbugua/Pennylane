import React from 'react';
import { 
    ApartmentContainer,
    OneBedroomHero,
    CustomLink
} from './apartmentDetail.styles';
import Banner from '../components/Banner/Banner';
import Slider from '../components/Slider/Slider';

const OneBedroom = () => {
    return (
        <ApartmentContainer>
            <OneBedroomHero>
                <Banner title='One Bedroom Apartment'>
                    <CustomLink to={`/`}>Back Home</CustomLink> 
                </Banner>
            </OneBedroomHero>
            <Slider />       
        </ApartmentContainer>
    );
}

export default OneBedroom  