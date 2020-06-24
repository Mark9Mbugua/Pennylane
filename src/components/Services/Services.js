import React, { useState } from 'react';
import { 
    ApartmentsSection,
    Info 
} from '../Apartments/apartments.styles';
import { 
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


const Services = () => {
    const [services, setServices] = useState([
        { 
            icon: trashIcon,
            title: 'Trash Collection',
            info: 'Trash is collected every Wednesday and Saturday' 
        },
        { 
            icon: wifiIcon,
            title: 'Wifi Zone',
            info: 'Wifi available courtesy of Safaricom Home Fibre' 
        },
        { 
            icon: waterIcon,
            title: 'Guaranteed water supply',
            info: 'Water is frequently pumped to all apartments from a borehole located within the compound' 
        },
        { 
            icon: cctvIcon,
            title: '24/7 security',
            info: 'The compound is guarded around the clock by competent security guards and world-class CCTV coverage' 
        },
        { 
            icon: roadIcon,
            title: 'Prime Location',
            info: 'The apartment buildings are located along Limuru road near Banana Town in Kiambu County close to all necessary social ammenities' 
        }
    ]);

    return (
        <ApartmentsSection id='services'>
            <TitleContainer>
                <SectionTitle>Services</SectionTitle>
                <Line />
            </TitleContainer>
            <ServicesContainer>
                {services.map((item, index) => {
                    console.log(item.icon);
                    return (
                    <ServiceItem key={index}>
                        <img src={item.icon} />
                        <Info>{item.title}</Info>
                        <ServiceInfo>{item.info}</ServiceInfo>
                    </ServiceItem>
                    );
                })}
            </ServicesContainer>
        </ApartmentsSection>
    )
}

export default Services
