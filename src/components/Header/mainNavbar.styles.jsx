import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { Link as HomeLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    min-height: 8vh;
    background: #74706D;
    align-items: center;

`;

export const Logo = styled.div`
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 18px;

    @media screen and (max-width: 1024px) {
        letter-spacing: 3px;
    }            
`;

export const NavLinks = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 40%;

    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background: #74706D;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transition: transform 0.5s ease-in;
        transform: translateX(${ props => props.displayMobileNavbar ? ("0%"): ("100%") });
        z-index: 5;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #74706D;
    }
`;

export const Home = styled(HomeLink)`
    text-decoration: none;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #74706D;
    }
`;

export const LogoLink = styled(HomeLink)`
    text-decoration: none;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #74706D;
    }
`;

export const Burger = styled.div`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
       display: block;
       div {
            width: 25px;
            height: 3px;
            background-color: rgb(226, 226, 226);
            margin: 5px;
        }
    }
`;


    