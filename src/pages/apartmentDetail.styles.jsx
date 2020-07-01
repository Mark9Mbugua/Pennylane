import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img1 from '../images/one-bd-kitchen-1.jpg';
import img2 from '../images/2bdexterior2.jpg';
import img3 from '../images/1balcony1.jpg';

export const ApartmentContainer = styled.div`
    display: grid;
    grid-gap: 10px;
`;

export const OneBedroomHero = styled.header`
    min-height: 60vh;
    background: url(${img1});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TwoBedroomHero  = styled(OneBedroomHero)`
    background: url(${img2});
`;

export const ThreeBedroomHero = styled(OneBedroomHero)`
    background: url(${img3});
`;

export const CustomLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    letter-spacing: 3px;
    color: #222;
    background: #af9a7d;;
    padding: 0.4rem 0.9rem;
    border: 3px solid #af9a7d;
    text-transform: uppercase;
    cursor: pointer;
    
    &:hover {
        background: transparent;
        color: #ececec;
    }
`;

export const DetailsContainer = styled.div`
    width: 80%;
    min-height: 40vh;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    position: relative;
    overflow: hidden; 
    justify-self: center; 
    justify-items: center; 
`;

export const Details = styled.div`
    display: block;
    padding: 10px;
    h3 {
        line-height: 2.5rem;
        letter-spacing: 2.5px;
    }
    p {
        letter-spacing: 1.5px;
        line-height: 2rem;  
    }
`;

export const Info = styled(Details)`
    
`;