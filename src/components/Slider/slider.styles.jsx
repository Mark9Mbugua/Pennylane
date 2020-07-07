import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 60%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden; 
    justify-self: center;

    @media screen and (max-width: 1024px) {
        width: 95%;
        height: 70vh;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 70vh;
    }  
`;

export const Slide = styled.div`
    min-width: 100%;    
    height: 85%;
    transition: 0.5s;
    border: 1px solid red;
    overflow: hidden;
`;

const CustomButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 85%;
    background: none;
    outline: none;
    border: none;

    &:hover {
        background: rgba(0, 0, 0, 0.356);
    }

    @media screen and (max-width: 1024px) {
        width: 10%;
    }

    @media screen and (max-width: 768px) {
        width: 10%;
    }
`;

export const Left = styled(CustomButton)`
    left: 0;
    .arrow{
        font-size: 5vh;
        color: grey;
        opacity: 10;
        &:hover {
            color: white;
            background: inherit;
        }
    }
`;

export const Right = styled(CustomButton)`
    right: 0;
    .arrow{
        font-size: 5vh;
        color: grey;
        opacity: 10;

        &:hover {
            color: white;
            background: inherit;
        } 
    }
`;

export const SliderImage = styled.img`
    width: 100%;
    height: 'auto';
`;