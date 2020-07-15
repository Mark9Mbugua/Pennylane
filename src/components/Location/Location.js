import React, {useEffect, useState, useRef} from 'react';
import {gsap, TweenMax, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    LocationContainer,
    LocationSection, 
    MapRouter,
    MapCanvas
} from './location.styles';
import {
    Line,
    SectionTitle,
    TitleContainer
 } from '../Common/common.styles';

 import { 
    ApartmentsSection
} from '../Apartments/apartments.styles';

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
    let locationSection = useRef(null);
    let locationTitle = useRef(null);
    let locationContainer = useRef(null);

    useEffect(() =>{     
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: locationSection,
                toggleActions: 'restart none restart none',
                start: '6 70%'
            }
        });

        gsap.to(locationSection, 0, {css: {visibility: 'visible'}});
        
        tl
        .from(locationTitle,{
            xPercent: 100,
            duration: .8,
            opacity: 0,
            ease: "elastic.inOut(1, 0.3)"
        })
        .from(locationContainer, {
            duration: 1, 
            opacity: 0, 
            y: -80,
            ease: Power3.easeInOut
        });
    }, []);

    return (
        <LocationSection id='location' ref={el => locationSection = el}>
            <TitleContainer ref={el => locationTitle = el}>
                <SectionTitle>Location</SectionTitle>
                <Line />
            </TitleContainer>
            <LocationContainer ref={el => locationContainer = el}>
                <MapRouter>
                    <MapCanvas className="gmap_canvas">
                        <iframe 
                            width="100%" 
                            height="500" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=pennylane&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0">
                        </iframe>
                    </MapCanvas>
                </MapRouter>
            </LocationContainer>
        </LocationSection>
    );
}

export default Location
