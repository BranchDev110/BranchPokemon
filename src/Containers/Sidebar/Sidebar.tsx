import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    height: 100%;
    width: 80px;
    border-right: 1px solid #333;
    text-align: center;
`
const PokemonLogo = styled.img`
    width: 50px;
    height: 50px;
`

const PokemonLogoContainer = styled.div`
    height: 80px;
    padding: 15px;
    border-bottom: 1px solid #333;
`

const Sidebar = () => {
    return (
        <SidebarContainer>
            <PokemonLogoContainer>
                <Link to="/">
                    <PokemonLogo src='./pokeball-white.png'/>
                </Link>
            </PokemonLogoContainer>
        </SidebarContainer>
    )
}

export default Sidebar;