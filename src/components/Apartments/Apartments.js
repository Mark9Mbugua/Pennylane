import React from 'react';
import oneBedroom from '../../images/1bdsitting.jpg';
import twoBedroom from '../../images/2bdexterior.jpg';
import { Link } from 'react-router-dom';
import { 
    ApartmentsContainer,
    ApartmentsSection,
    FeaturedApartment,
    FeaturedImg,
    SectionTitle,
    TitleContainer,
    Line,
    Info,
    ImgContainer,
    PriceTop,
    PriceTitle
 } from './apartments.styles';

const Apartments = () => {
    return (
        <ApartmentsSection>
            <TitleContainer>
                <SectionTitle>Apartments</SectionTitle>
                <Line />
            </TitleContainer>
            <ApartmentsContainer>
                <FeaturedApartment>
                    <ImgContainer>
                        <FeaturedImg src={oneBedroom} alt='One Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 20,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                    </ImgContainer>
                    <Info>One bedroom</Info>
                </FeaturedApartment>
                <FeaturedApartment>
                    <ImgContainer>  
                        <FeaturedImg src={twoBedroom} alt='Two Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 35,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                    </ImgContainer>
                    <Info>Two bedroom Penthouse</Info>
                </FeaturedApartment>
                <FeaturedApartment>
                    <ImgContainer>
                        <FeaturedImg src={oneBedroom} alt='Three Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 30,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                    </ImgContainer>
                    <Info>Three bedroom</Info>
                </FeaturedApartment>
            </ApartmentsContainer>
        </ApartmentsSection>
    );
}

export default Apartments
