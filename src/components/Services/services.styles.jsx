import styled from 'styled-components';
import { 
    ApartmentsContainer, 
    ApartmentsSection 
} from '../Apartments/apartments.styles';

export const ServicesSection = styled(ApartmentsSection)`
   @media screen and (max-width: 1024px) {
        min-height: 80vh;
    }      
`;

export const ServicesContainer = styled(ApartmentsContainer)`
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: start;
    grid-gap: 25px;
    padding: 50px 20px;

    @media screen and (max-width: 1024px) {
        grid-gap: 15px;
        grid-template-columns: repeat(3, 1fr);
        padding: 5px 15px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ServiceItem = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-gap: 15px;
    img {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 60%;
            height: 20vh;
        }
    }
`;

export const ServiceInfo = styled.p`
    padding: 0.5rem 0;
    text-align: center;
    letter-spacing: 2.5px;

    @media screen and (max-width: 768px) {
        letter-spacing: 2px;
    }
`;