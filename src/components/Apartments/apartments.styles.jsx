import styled from 'styled-components';

export const ApartmentsSection = styled.section`
    min-height: 75vh;
    display: grid;
    grid-template-rows: 25% 1fr;
`;

export const ApartmentsContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 40px;
`;

export const FeaturedApartment = styled.div`
    display: grid;
    align-items: center;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    transition: all 0.3s linear;
    &:hover {
        box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);;
    }
`;

export const TitleContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 10px 0 0 0;
`;

export const SectionTitle = styled.h1`   
    font-size: 4.5vh;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #74706D;
`;

export const Line = styled.div`
    background: #74706D;
    width: 20vh;
    height: 5px;
    margin: 5px;
    align-self: center;
    justify-self: center;
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