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

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px)
    and (min-height: 1024px) 
    and (max-height: 1024px) {
        width: 80%;
        height: 80vh;
    }

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px)
    and (min-height: 768px) 
    and (max-height: 950px) {
        width: 70%;
        height: 90vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 70%;
        height: 75vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 80%;
        height: 60vh;
    }
    

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        width: 75%;
        height: 85vh;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 85%;
        height: 65vh;
    }

    @media screen and (max-width: 480px) {
        width: 90%;
        height: 60vh;
    }  
`;

export const Slide = styled.div`
    min-width: 100%;    
    height: 85%;
    transition: 0.5s;
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

    @media screen and (max-width:  480px) {
        width: 10%;
    }
`;

export const Left = styled(CustomButton)`
    left: 0;
    .arrow{
        font-size: 5vh;
        color: white;
        opacity: 10;
        background: #74706D;
        
        &:hover {
            color: #74706D;
            background: white;
            
        }
    }
`;

export const Right = styled(CustomButton)`
    right: 0;
    .arrow{
        font-size: 5vh;
        color: white;
        opacity: 10;
        background: #74706D;

        &:hover {
            color: #74706D;
            background: white;
            
        } 
    }
`;

export const SliderImage = styled.img`
    width: 100%;
    height: 'auto';
`;