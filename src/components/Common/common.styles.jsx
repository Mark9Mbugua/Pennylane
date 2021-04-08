import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 5px 0 ;
    height: 15vh;

    @media screen and (max-width: 1024px) {
        padding: 10px 0 0 0;
        grid-gap: 3px;
        height: 12vh;
    }    
    
    @media screen and (max-width:  480px) {
        padding: 10px 0 0 0;
        grid-gap: 3px;
        height: 20vh;
    }
`;

export const SectionTitle = styled.h1`   
    font-size: 4.5vh;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #74706D;

    @media screen and (max-width:  480px) {
        letter-spacing: 3px;
        font-size: 3.5vh;
        margin-top: 5%;
    }
`;

export const Line = styled.div`
    background: #74706D;
    width: 20vh;
    height: 5px;
    margin-top: -2%;
    align-self: center;
    justify-self: center;

    @media screen and (max-width:  480px) {
        letter-spacing: 3px;
        margin-top: 0;
        align-self: start;

    }
`;