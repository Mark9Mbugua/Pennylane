import styled from 'styled-components';
import { 
    ApartmentsContainer, 
    Info 
} from '../Apartments/apartments.styles';

export const ContactsSection = styled.section`
    display: grid;
    grid-gap: 10px;
    height: 105vh;
    grid-template-rows: 15% 1fr;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        grid-gap: 5px;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 95vh;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        height: 110vh;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        height: 95vh;
    }

    @media screen and (max-width: 480px) {
        grid-template-rows: 20% 1fr;
        border: 1px solid red;
    }
`;

export const ContactsContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    grid-gap: 10px;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        grid-gap: 5px;
        width: 100%;
        height: 80%;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        height: 100%;
    }
    
    @media screen and (max-width: 480px) {
        grid-gap: 5px;
    }
`;

export const ContactsForm = styled.form`
    grid-column: 1/3;
    width: 50%;

    @media only screen 
    and (min-width: 1280px) 
    and (max-height: 1280px) {
        width: 65%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 55%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 70%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 20px;
        width: 80%;
    }
`;

export const Phone = styled(Info)`
    grid-column: 1/3;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        grid-column: 1/6;
    }

    @media screen and (max-width: 480px) {
        grid-column: 1/6;
    }
`;