import styled from 'styled-components';
import img from '../../images/compound1.jpg';

export const HomeSection = styled.section`
    min-height: 90vh;
    display: grid;
    background: #74706D;
    background-position: center;
    background-size: cover;
    justify-items: center;
    align-items: center;

    .hero::after{
        content: '';
        background: black;
        width: 100%;
        height: 90vh;
        position: absolute;
        opacity: 0.3;
    }

    @media screen and (max-width: 1024px) {
        min-height: 90vh;
        .hero::after{
            height: 90vh;
        } 
    }

    @media screen and (max-width: 768px) {
        min-height: 80vh;
        .hero::after{
            height: 80vh;
        } 
    }
`;

export const Hero = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 80vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;    
    }

    @media screen and (max-width: 1024px) {
        min-height: 60vh; 
    }

    @media screen and (max-width: 768px) {
        min-height: 60vh;
    }
`;

export const Intro = styled.div`
    position: absolute;
    display: grid;
    justify-items: center;
    align-items: center;
    background: #74706D;
    height: 40%;
    opacity: 0.9;
    z-index: 3;

    @media screen and (max-width: 1024px) {
        height: 45%;
        text-align: center; 
    }

    @media screen and (max-width: 768px) {
        height: 40%;
        text-align: center;
    }
`;

export const IntroTitle = styled.h1`
    color: #fff;
    font-size: 10vh;
    padding: 10px 30px;
    z-index: 4;

    @media screen and (max-width: 1024px) {
        padding: 5px 40px;
        font-size: 6vh;
    }

    @media screen and (max-width: 768px) {
        font-size: 5vh;
        padding: 5px 50px;
    }
`;

export const WhiteLine = styled.div`
    background: #fff;
    width: 40vh;
    height: 10px;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1024px) {
        width: 25vh;
        height: 8px;
    }

    @media screen and (max-width: 768px) {
        width: 25vh;
        height: 7px;
    }      
`;