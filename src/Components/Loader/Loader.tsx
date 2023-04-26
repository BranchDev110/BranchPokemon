import styled, {keyframes} from 'styled-components';

const rotationAnimation = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
`

const LoadingContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
`

const LoadingComponent = styled.div`
    border: 5px solid #333;
    border-top: 5px solid #666;
    border-radius: 50%;
    animation-name: ${rotationAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    width: 80px;
    height: 80px;
`

const Loader = () => {
    return (
        <LoadingContainer>
            <LoadingComponent></LoadingComponent>
        </LoadingContainer>
    )
}

export default Loader;