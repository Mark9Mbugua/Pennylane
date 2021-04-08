import styled from 'styled-components';

export const HomeSection = styled.section`
    height: 100vh;
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
        height: 100%;
        position: absolute;
        opacity: 0.3;
    }
`;

export const Hero = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;    
    }

    @media screen and (max-width: 480px) {
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

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px)
    and (min-height: 1024px) 
    and (max-height: 1024px){
        width: 80%;
        height: 35%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 90%;
        height: 25%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 90%;
        height: 25%;
    }

    @media screen and (max-width: 480px) {
        height: 20%;
        width: 90%;
        text-align: center;
    }
`;

export const IntroTitle = styled.h1`
    color: #fff;
    font-size: 10vh;
    padding: 10px 30px;
    z-index: 4;

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px)
    and (min-height: 1024px) 
    and (max-height: 1024px){
        font-size: 8vh;
        padding: 8px 20px;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        font-size: 5.5vh;
        padding: 5px 10px;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        font-size: 5.5vh;
        padding: 5px 10px;
    }

    @media screen and (max-width:  480px) {
        font-size: 4vh;
        padding: 5px 10px;
    }
`;

export const WhiteLine = styled.div`
    background: #fff;
    width: 40vh;
    height: 10px;
    margin-bottom: 20px;

    @media screen and (max-width:  480px) {
        width: 25vh;
        height: 7px;
    }      
`;