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

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 70vh;
    }  
`;

export const Slide = styled.div`
    min-width: 100%;    
    height: 80%;
    transition: 0.5s;
    /* overflow: hidden; */
`;

const CustomButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 80%;
    background: none;
    outline: none;
    border: none;

    &:hover {
        background: rgba(0, 0, 0, 0.356);
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