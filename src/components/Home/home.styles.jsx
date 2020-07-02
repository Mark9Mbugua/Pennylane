import styled from 'styled-components';
import img from '../../images/compound1.jpg';

export const HomeSection = styled.section`
    min-height: 80vh;
    display: grid;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    justify-items: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        min-height: 60vh;
    }
`;

export const Intro = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    background: #74706D;
    height: 30%;
    opacity: 0.9;

    @media screen and (max-width: 768px) {
        height: 40%;
        text-align: center;
    }
`;

export const IntroTitle = styled.h1`
    color: #fff;
    font-size: 10vh;
    padding: 10px 30px;

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
    
    @media screen and (max-width: 768px) {
        width: 25vh;
        height: 7px;
    }
      
`;