import styled from 'styled-components';
import { 
    ApartmentsContainer, 
    ApartmentsSection 
} from '../Apartments/apartments.styles';

export const ServicesSection = styled(ApartmentsSection)`
     min-height: 200vh;
     grid-template-rows: 1fr;
     grid-row-gap: 10px;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        border: 1px solid inherit;
        grid-template-rows: 10% 1fr;
        min-height: 155vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        border: 1px solid inherit;
        grid-template-rows: 10% 1fr;
        min-height: 235vh;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        border: 1px solid inherit;
        min-height: 235vh;
        grid-template-rows: 10% 1fr;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        border: 1px solid inherit;
    }

    @media screen and (max-width: 480px) {
        grid-template-rows: 5% 1fr;
        min-height: 330vh;
        justify-items: center;
    }      
`;

export const ServicesContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 15px;
    padding: 30px 10px;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        border: 1px solid inherit;
        grid-gap: 10px;
        grid-template-columns: 1fr;
        justify-items: stretch;
        width: 90%;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        border: 1px solid inherit;
        grid-gap: 10px;
        grid-template-columns: 1fr;
        justify-items: stretch;
        width: 90%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        border: 1px solid inherit;
        grid-gap: 10px;
        grid-template-columns: 1fr;
        justify-items: stretch;
        width: 95%;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
        padding: 10px 10px;
    }
`;

export const ServiceItem = styled.div`
    display: grid;
    width: 75%;
    height: 40vh;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: center;
    grid-gap: 15px;
    border: 1px solid inherit;
    
    img {
        width: 50%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 95%;
        min-height: 30vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 95%;
        height: 20vh;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        width: 95%;
        min-height: 40vh;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 95%;
        min-height: 40vh;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        justify-items: center;
        height: 55vh;
        margin: 0 auto;
         
        img {
            width: 45%;
        }
    }
`;

export const ServiceInfo = styled.p`
    padding: 0.5rem 0;
    text-align: center;
    letter-spacing: 3px;
    line-height: 2.5rem;

    @media screen and (max-width: 480px) {
        letter-spacing: 1.5px;
        line-height: 1.5rem;
    }
`;