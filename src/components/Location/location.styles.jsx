import styled from 'styled-components';
import { ApartmentsContainer } from '../Apartments/apartments.styles';

export const LocationContainer = styled(ApartmentsContainer)`
    grid-template-columns: 1fr;
    padding: 30px 20px;
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