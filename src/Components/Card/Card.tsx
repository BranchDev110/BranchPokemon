import React from 'react';
import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #1F1F2A;
    flex: 1 1 19%;
    padding: 18px;
    border-radius: 15px;
`

export const CardBody = styled.div`
    position: relative;
    background-color: #383652;
`

export const CardId = styled.div`
    position: absolute;
    left: 15px;
    top: 5px;
    font-size: 36px;
    color: #9094C7;
`

const CardFooter = styled.div`
    padding: 10px;
`

const CardName = styled.div`
    font-size: 28px;
    color: #595B70;
`

const Card = ({data}: any) => {
    return (
        <CardContainer>
            <CardBody>
                <CardId>{data.id}</CardId>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data.id.toString().padStart(3, '0')}.png`}/>
            </CardBody>
            <CardFooter>
                <CardName>{data.name}</CardName>
            </CardFooter>
        </CardContainer>
    )
}

export default Card;