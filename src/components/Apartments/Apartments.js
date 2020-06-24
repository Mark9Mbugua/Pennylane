import React from 'react';
import oneBedroom from '../../images/1bdsitting.jpg';
import twoBedroom from '../../images/2bdexterior.jpg';
//import { Link } from 'react-router-dom';
import { 
    ApartmentsContainer,
    ApartmentsSection,
    FeaturedApartment,
    FeaturedImg,
    Info,
    ImgContainer,
    PriceTop,
    PriceTitle,
    HouseLink
 } from './apartments.styles';

 import {
    Line,
    SectionTitle,
    TitleContainer
 } from '../Common/common.styles';

const Apartments = () => {
    return (
        <ApartmentsSection id='apartments'>
            <TitleContainer>
                <SectionTitle>Apartments</SectionTitle>
                <Line />
            </TitleContainer>
            <ApartmentsContainer>
                <FeaturedApartment>
                    <ImgContainer className='img-container'>
                        <FeaturedImg src={oneBedroom} alt='One Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 20,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                        <HouseLink className='house-link' to={`/apartment`}>Features</HouseLink>
                    </ImgContainer>
                    <Info>One bedroom</Info>
                </FeaturedApartment>
                <FeaturedApartment>
                    <ImgContainer className='img-container'>  
                        <FeaturedImg src={twoBedroom} alt='Two Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 35,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                        <HouseLink className='house-link' to={`/apartment`}>Features</HouseLink>
                    </ImgContainer>
                    <Info>Two bedroom Penthouse</Info>
                </FeaturedApartment>
                <FeaturedApartment>
                    <ImgContainer className='img-container'>
                        <FeaturedImg src={oneBedroom} alt='Three Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 30,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                        <HouseLink className='house-link' to={`/apartment`}>Features</HouseLink>
                    </ImgContainer>
                    <Info>Three bedroom</Info>
                </FeaturedApartment>
            </ApartmentsContainer>
        </ApartmentsSection>
    );
}

export default Apartments
