import styled from "styled-components";
import data from '../../constant/about.json';

const AboutContainer = styled.div`
    color: white;
`

const AboutText = styled.p`
    font-size: 18px;
    letter-spacing: 1.2px;
    line-height: 2;
`

const About = () => {
    return (
        <AboutContainer>
            <AboutText>Developer: {data.name}</AboutText>
            <AboutText>Year: {data.year}</AboutText>
            <AboutText>Stack: {data.stack.join(', ')}</AboutText>
            <AboutText>Github: <a href={data.Github}>{data.Github}</a></AboutText>
        </AboutContainer>
    )
}

export default About;