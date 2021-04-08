import styled from 'styled-components';
import { 
    ApartmentsContainer, 
    ApartmentsSection 
} from '../Apartments/apartments.styles';

export const ServicesSection = styled(ApartmentsSection)`
     min-height: 200vh;
     grid-template-rows: 1fr;
     grid-row-gap: 10px;

    @media screen and (max-width: 1024px) {
        grid-template-rows: 15vh 1fr;
        align-items: start;
        min-height: 140vh;
        grid-column-gap: 5px;

    }

    @media screen and (max-width:  480px) {
        min-height: 220vh;
        justify-items: center;
    }      
`;

export const ServicesContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 15px;
    padding: 30px 10px;

    @media screen and (max-width: 1024px) {
        grid-gap: 10px;
        grid-template-columns: 1fr;
        justify-items: stretch;
        width: 90%;
    }

    @media screen and (max-width:  480px) {
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
    
    img {
        width: 50%;
    }

    @media screen and (max-width: 1024px) {
        height: 25vh;
        width: 95%;
    }

    @media screen and (max-width:  480px) {
        grid-template-columns: 1fr;
        justify-items: center;
        height: 50vh;
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

    @media screen and (max-width:  480px) {
        letter-spacing: 2px;
        line-height: 1.5rem;
    }
`;