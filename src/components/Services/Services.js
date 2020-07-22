import React, {useEffect, useState, useRef} from 'react';
import {gsap, TweenMax, Power3} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    ApartmentsSection,
    Info 
} from '../Apartments/apartments.styles';
import {
    ServicesTitleContainer,
    ServicesSection, 
    ServicesContainer,
    ServiceItem,
    ServiceInfo
 } from './services.styles';
import {
    Line,
    SectionTitle,
    TitleContainer
 } from '../Common/common.styles';
 import cctvIcon from '../../images/cctv.svg';
 import roadIcon from '../../images/road.svg';
 import trashIcon from '../../images/trash.svg';
 import waterIcon from '../../images/water.svg';
 import wifiIcon from '../../images/wifi.svg';

 gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    let serviceItem = useRef(null);
    let servicesSection = useRef(null);
    let servicesTitle = useRef(null);
    let serviceItemImage = useRef(null);
    let servicesContainer = useRef(null);

    useEffect(() =>{
        const serviceFirst = servicesContainer.children[0];
        const serviceSecond = serviceFirst.nextSibling;
        const serviceThird = serviceSecond.nextSibling;
        const serviceFourth = serviceThird.nextSibling;
        const serviceFifth = serviceFourth.nextSibling;       

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: servicesSection,
                toggleActions: 'restart none none none',
                start: '6 70%'
            }
        });

        gsap.to(servicesSection, 0, {css: {visibility: 'visible'}});
        
        tl
        .from(servicesTitle,{
            yPercent: -100,
            duration: .8,
            opacity: 0,
            ease: "elastic.inOut(1, 0.3)"
        })
        .from([serviceFirst, serviceSecond, serviceThird, serviceFourth, serviceFifth], {
            duration: .8, 
            opacity: 0, 
            y: -40,
            ease: Power3.easeInOut, 
            stagger: 0.5
        });
    }, []);
    
    const [services, setServices] = useState([
        { 
            icon: trashIcon,
            title: 'Trash Collection',
            info: 'Trash is collected every Thursday.' 
        },
        { 
            icon: wifiIcon,
            title: 'Wifi Zone',
            info: 'Wifi is available courtesy of Safaricom Home Fibre.' 
        },
        { 
            icon: waterIcon,
            title: 'Guaranteed water supply',
            info: 'Water is frequently pumped to all apartments from a borehole located within the compound.' 
        },
        { 
            icon: cctvIcon,
            title: '24/7 security',
            info: 'The compound is guarded around the clock by competent security guards, world-class CCTV coverage and a police station that is less than 2km away.' 
        },
        { 
            icon: roadIcon,
            title: 'Prime Location',
            info: 'The apartment buildings are located along good road infrastructure and near various healthcare facilities, schools, shopping centres, a market etc.' 
        }
    ]);

    return (
        <ServicesSection id='services' ref={el => servicesSection = el}>
            <TitleContainer ref={el => servicesTitle = el}>
                <SectionTitle>Services</SectionTitle>
                <Line />
            </TitleContainer>
            <ServicesContainer ref={el => servicesContainer = el}>
                {services.map((item, index) => {
                    return (
                        <ServiceItem key={index} ref={el => serviceItem = el}>
                            <img src={item.icon} ref={el => serviceItemImage = el} />
                            <div>
                                <Info>{item.title}</Info>
                                <ServiceInfo>{item.info}</ServiceInfo>
                            </div>
                        </ServiceItem>
                    );
                })}
            </ServicesContainer>
        </ServicesSection>
    )
}

export default Services
