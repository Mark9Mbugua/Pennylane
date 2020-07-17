import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ApartmentsSection = styled.section`
    min-height: 75vh;
    display: grid;
    grid-template-rows: 25% 1fr;

    @media screen and (max-width: 1024px) {
        grid-template-rows: 20% 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-rows: 1fr;
    }
`;

export const ApartmentsContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 40px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        grid-template-columns: 1fr;
        margin: 0;
        grid-gap: 30px;
    }
`;

export const FeaturedApartment = styled.div`
    display: grid;
    align-items: center;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    transition: all 0.3s linear;
    &:hover {
        box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);;
    }
    .img-container:hover .house-link {
        transform: translate(-50%, -50%) scale(1);
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const FeaturedImg = styled.img`
    width: 100%;
    display: block;
    transition: all 0.3s linear;
    &:hover {
        opacity: 0.3;
    }
`;

export const Info = styled.p`
    background: #ececec;
    text-transform: capitalize;
    padding: 0.5rem 0;
    text-align: center;
    font-weight: 700;
    letter-spacing: 4px;
    
    @media screen and (max-width: 768px) {
        letter-spacing: 3px;
    }
    
`;

export const ImgContainer = styled.div`
    position: relative;
    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }
`;

export const PriceTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: all 0.3s linear;
    p {
        font-size: 0.6rem;
    }
`;

export const PriceTitle = styled.h6`
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 3px;
`;

export const HouseLink = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
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

