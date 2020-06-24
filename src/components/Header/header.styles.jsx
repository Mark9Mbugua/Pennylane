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
`;

export const NavLinks = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 40%;
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