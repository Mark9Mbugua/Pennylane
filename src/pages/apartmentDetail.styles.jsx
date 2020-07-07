import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ApartmentContainer = styled.div`
    display: grid;
    grid-gap: 10px;
`;

export const ApartmentHero = styled.header`
    min-height: 60vh;
    background: url(${ props => props.coverImage });
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
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

    @media screen and (max-width: 1024px) {
        width: 90%;
    } 

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    } 
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

    @media (min-width: 768px) and (max-width: 1024px) {
        h3 {
            font-size: 2vh;
            line-height: 3rem;
            letter-spacing: 3px;
        }
        p {
            font-size: 1.5vh;
            letter-spacing: 2px;
            line-height: 2.5rem;  
        }   
    }
`;

export const Info = styled(Details)`
    
`;