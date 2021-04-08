import styled from 'styled-components';
import { ApartmentsContainer, ApartmentsSection } from '../Apartments/apartments.styles';

export const LocationSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 18% 1fr;

    @media only screen 
    and (min-width: 1440px) 
    and (max-width: 1920px) {
        min-height: 90vh;
    }

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px) 
    and (min-height: 1024px) 
    and (max-height: 1024px){
        min-height: 85vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        min-height: 80vh;
    }

    @media screen and (max-width: 480px) {
        min-height: 90vh;
        grid-template-rows: 25% 1fr;
    }
`;

export const LocationContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    padding: 10px 20px;
    width: 100%;
    align-content: center;

    @media screen and (max-width: 1920px) {
        grid-template-columns: 1fr;
        padding: 20px 20px;
        width: 100%;
    }

    @media only screen 
    and (min-width: 1440px) 
    and (max-width: 1920px) {
        min-height: 60%;
    }

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px) 
    and (min-height: 1024px) 
    and (max-height: 1024px){
        min-height: 65%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        padding: 10px 30px;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 80%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        height: 80%;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
        height: 85%;
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
`;