import React, {useEffect, useRef} from 'react';
import {gsap, TweenMax, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import oneBedroom from '../../images/full2-min.jpg';
import twoBedroom from '../../images/2bdexterior-min.jpg';
import threeBedroom from '../../images/1bdsitting-min.jpg';
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

gsap.registerPlugin(ScrollTrigger);

const Apartments = () => {
    let apartments = useRef(null);
    let apartmentContainer = useRef(null);
    let apartmentsTitle = useRef(null);

    useEffect(() =>{
        const apartmentFirst = apartmentContainer.children[0];
        const apartmentSecond = apartmentFirst.nextSibling;
        const apartmentThird = apartmentSecond.nextSibling;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: apartments,
                toggleActions: 'restart none restart none',
                start: '6 70%'
            }
        });

        TweenMax.to(apartments, 0, {css: {visibility: 'visible'}});
        
        tl
        .from(apartmentsTitle,{
            xPercent: 100,
            duration: .8,
            opacity: 0,
            ease: "elastic.inOut(1, 0.3)"
        })
        .from([apartmentFirst, apartmentSecond, apartmentThird], {
            duration: .8, 
            opacity: 0, 
            y: 30,
            ease: Power3.easeInOut, 
            stagger: 0.3
        });
    }, []);
    
    return (
        <ApartmentsSection id='apartments' ref={el => apartments = el}>
            <TitleContainer ref={el => apartmentsTitle = el}>
                <SectionTitle>Apartments</SectionTitle>
                <Line />
            </TitleContainer>
            <ApartmentsContainer ref={el => apartmentContainer = el}>
                <FeaturedApartment>
                    <ImgContainer className='img-container'>
                        <FeaturedImg src={oneBedroom} alt='One Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 20,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                        <HouseLink className='house-link' to={`/one-bedroom`}>Features</HouseLink>
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
                        <HouseLink className='house-link' to={`/two-bedroom`}>Features</HouseLink>
                    </ImgContainer>
                    <Info>Two bedroom Penthouse</Info>
                </FeaturedApartment>
                <FeaturedApartment>
                    <ImgContainer className='img-container'>
                        <FeaturedImg src={threeBedroom} alt='Three Bedroom' />
                        <PriceTop>
                            <PriceTitle>Ksh 30,000</PriceTitle>
                            <p>per month</p>
                        </PriceTop>
                        <HouseLink className='house-link' to={`/three-bedroom`}>Features</HouseLink>
                    </ImgContainer>
                    <Info>Three bedroom</Info>
                </FeaturedApartment>
            </ApartmentsContainer>
        </ApartmentsSection>
    );
}

export default Apartments
