import styled from 'styled-components';
import img from '../../images/full1.jpg';

export const HomeSection = styled.section`
    min-height: 80vh;
    display: grid;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    justify-items: center;
    align-items: center;
`;

export const Intro = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    background: #74706D;
    height: 30%;
    opacity: 0.9;
`;

export const IntroTitle = styled.h1`
    color: #fff;
    font-size: 10vh;
    padding: 10px 30px;
`;

export const WhiteLine = styled.div`
    background: #fff;
    width: 40vh;
    height: 10px;
    margin-bottom: 20px;  
`;