import styled from 'styled-components';

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

    li {
        list-style: none;
    }
`;

export const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: bold;
    
    &:hover {
        background: #fff;
        color: #74706D;
    }
`;