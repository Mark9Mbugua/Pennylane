import styled from 'styled-components';
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

    @media screen and (max-width: 768px) {
        letter-spacing: 3px;
        font-size: 16px;
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
            transition: all 0.3s linear;
            transform-origin: 1px;

            &:nth-child(1) {
                transform: ${({ displayMobileNavbar }) => displayMobileNavbar ? 'rotate(45deg)' : 'rotate(0)'};
            }

            &:nth-child(2) {
                transform: ${({ displayMobileNavbar }) => displayMobileNavbar ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({ displayMobileNavbar }) => displayMobileNavbar ? 0 : 1};
            }

            &:nth-child(3) {
                transform: ${({ displayMobileNavbar }) => displayMobileNavbar ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }
    }
`;


    