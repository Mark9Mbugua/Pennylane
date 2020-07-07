import styled from 'styled-components';
import { 
    ApartmentsSection, 
    ApartmentsContainer, 
    Info 
} from '../Apartments/apartments.styles';

export const ContactsSection = styled(ApartmentsSection)`
    grid-gap: 10px;

    @media screen and (max-width: 1024px) {
        grid-gap: 5px;
        min-height: 70vh;
    }

    @media screen and (max-width: 768px) {
        grid-gap: 5px;
    }
`;

export const ContactsContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 1024px) {
        grid-gap: 5px;
        width: 100%;
    }
    
    @media screen and (max-width: 768px) {
        grid-gap: 5px;
    }
`;

export const ContactsForm = styled.form`
    grid-column: 1/3;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const Phone = styled(Info)`
    grid-column: 1/3;
`;