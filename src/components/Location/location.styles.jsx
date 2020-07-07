import styled from 'styled-components';
import { ApartmentsContainer, ApartmentsSection } from '../Apartments/apartments.styles';

export const LocationSection = styled(ApartmentsSection)`
    @media screen and (max-width: 1024px) {
        grid-template-rows: 20% 1fr;
        min-height: 70vh;
    }

    @media screen and (max-width: 768px) {
        min-height: 90vh;
    }
`;

export const LocationContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    padding: 30px 20px 100px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 20px 20px;
        width: 100%;

    }

    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`;

export const MapRouter = styled.div`
    position: relative;
    text-align: right;
    height: 100%;
    width: 100%;
`;

export const MapCanvas = styled.div`
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 1024px) {
        iframe {
            height: 100%;
        }
    }
`;