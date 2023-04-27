import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const VirtualScrollChildContainer = styled.div`
    width: 20%;
    height: 450px;
    @media only screen and (max-width: 1750px) {
        width: 25%;
    }
    @media only screen and (max-width: 1440px) {
        width: 33%;
    }
    @media only screen and (max-width: 1200px) {
        width: 50%;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const VirtualScrollChild = ({children} : any) => {
    const {ref, inView} = useInView();
    return (
        <VirtualScrollChildContainer ref={ref}>
            {
                inView ? children : null
            }
        </VirtualScrollChildContainer>
    )
}

export default VirtualScrollChild;