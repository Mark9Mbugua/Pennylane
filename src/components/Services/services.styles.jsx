import styled from 'styled-components';
import { ApartmentsContainer } from '../Apartments/apartments.styles';

export const ServicesContainer = styled(ApartmentsContainer)`
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: start;
    grid-gap: 25px;
    padding: 50px 20px;
`;

export const ServiceItem = styled.div`
    display: grid;
    grid-gap: 15px;
    img {
        width: 80%;
    }
`;

export const ServiceInfo = styled.p`
    padding: 0.5rem 0;
    text-align: center;
    letter-spacing: 2.5px;
`;