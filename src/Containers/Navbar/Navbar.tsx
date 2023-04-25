import styled from 'styled-components';

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

const NavbarListItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
    font-family: 'Arial';
    letter-spacing: 2px;
    margin: 0 40px;
    cursor: pointer;
    position: relative;
    &:hover {
        &: after {
            position: absolute;
            width: 60px;
            height: 2px;
            background-color: #AAA;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: 0;
            content: '';
        }
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarListItem>HOME</NavbarListItem>
                <NavbarListItem>HISTORY</NavbarListItem>
                <NavbarListItem>ABOUT</NavbarListItem>
            </NavbarList>
        </NavbarContainer>
    )
}

export default Navbar;