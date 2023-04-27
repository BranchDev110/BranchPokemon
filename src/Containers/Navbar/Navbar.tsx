import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavbarListItemProps {
    current: boolean;
}

const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #333;
`

const NavbarList = styled.ul`
    display: flex;
    list-style: none;
    color: white;
`

const ActiveStyle = css`
&: after {
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: #AAA;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
    content: '';
}`

const NavbarListItem = styled.li<NavbarListItemProps>`
    display: flex;
    align-items: center;
    height: 80px;
    font-family: 'Arial';
    letter-spacing: 2px;
    margin: 0 40px;
    cursor: pointer;
    position: relative;
    color: white;
    ${({current}: any) => current && ActiveStyle}
`

const getCurrentFromLocation = (location: string): number => {
    if(location.includes('history')) return 1;
    else if(location.includes('about')) return 2;
    return 0;
}

const Navbar = () => {
    const location = useLocation();
    const [current, setCurrent] = useState(getCurrentFromLocation(location.pathname));

    return (
        <NavbarContainer>
            <NavbarList>
                <Link to='/' onClick={() => setCurrent(0)}><NavbarListItem current={current === 0}>HOME</NavbarListItem></Link>
                <Link to='/history' onClick={() => setCurrent(1)}><NavbarListItem current={current === 1}>HISTORY</NavbarListItem></Link>
                <Link to='/about' onClick={() => setCurrent(2)}><NavbarListItem current={current === 2}>ABOUT</NavbarListItem></Link>
            </NavbarList>
        </NavbarContainer>
    )
}

export default Navbar;