import styled from 'styled-components';

const RSidebarContainer = styled.div`
    height: 100%;
    width: 80px;
    border-left: 1px solid #333;
    text-align: center;
`
const ThreeMenuIcon = styled.div`
    width: 100%;
    height: 80px;
    padding: 25px 20px;
    border-bottom: 1px solid #333;
`

const ThreeMenuIconLine = styled.div`
    background-color: white;
    width: 40px;
    height: 3px;
    margin-bottom: 10px;
`

const RSidebar = () => {
    return (
        <RSidebarContainer>
            <ThreeMenuIcon> 
                <ThreeMenuIconLine/>
                <ThreeMenuIconLine/>
                <ThreeMenuIconLine/>
            </ThreeMenuIcon>
        </RSidebarContainer>
    )
}

export default RSidebar;