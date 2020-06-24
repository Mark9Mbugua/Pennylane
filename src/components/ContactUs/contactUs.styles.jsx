import styled from 'styled-components';
import { 
    ApartmentsSection, 
    ApartmentsContainer, 
    Info 
} from '../Apartments/apartments.styles';

export const ContactsSection = styled(ApartmentsSection)`
    grid-gap: 10px;
`;

export const ContactsContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`;

export const ContactsForm = styled.form`
    grid-column: 1/3;
    width: 50%;
`;

export const Phone = styled(Info)`
    grid-column: 1/3;
`;