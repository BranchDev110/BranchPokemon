import React from 'react';
import styled from "styled-components";
import colours from '../../constant/color';
import type {IColorTypes} from '../../constant/color';
import { Link } from 'react-router-dom';

interface CardContainerProps {
    type: keyof IColorTypes;
}

interface CardBadgeProps {
    data: {
        name: keyof IColorTypes;
        url: string;
    }
}

export const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(30,30,30,0.9);
    box-shadow: 0 0 30px rgba(250,250,250,0.2);
    width: 30%;
    flex: 1;
    margin: 30px 20px;
    padding: 36px;
    border-radius: 15px;
    border-bottom: 10px solid ${({type}: CardContainerProps) => colours[type]};
    cursor: pointer;
    transition: all 0.5s ease;
    &: hover{
        box-shadow: 0 0 30px rgba(250,250,250,0.3);
    }
`

export const CardBody = styled.div`
    position: relative;
`

export const CardId = styled.div`
    position: absolute;
    left: 15px;
    top: 5px;
    font-size: 36px;
    color: #9094C7;
`

const CardFooter = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardName = styled.div`
    font-size: 24px;
    color: gray;
    letter-spacing: 2px;
`

const CardImg = styled.div<CardContainerProps>`
    width: 210px;
    height: 210px;
    border-radius: 50%;
    border-bottom: 10px solid ${({type}: CardContainerProps) => colours[type]};
    border-left: 10px solid ${({type}: CardContainerProps) => colours[type]};
    box-shadow: 10px 10px 30px rgba(0,0,0,0.05), -10px -10px 20px rgba(0,0,0,0.01);
    background-color: rgba(40,40,40,0.5);
    overflow: hidden;
`

const CardBadgeContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`

const CardBadge = styled.span<CardBadgeProps>`
    padding: 5px 10px;
    margin: 3px;
    background-color: ${({data}: CardBadgeProps) => colours[data.name]};
    opacity: 0.8;
    color: white;
`

const Card = ({data}: any) => {
    return (
        <CardContainer type={data.types[0].type.name}>
            <Link to={`/details/${data.id}`}>
                <CardBody>
                    <CardImg type={data.types[0].type.name}>
                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data.id.toString().padStart(3, '0')}.png`}/>
                    </CardImg>
                </CardBody>
                <CardFooter>
                    <CardName>{data.name.toUpperCase()}</CardName>
                    <CardBadgeContainer>
                        {
                            data.types.map((item: any, index: number) => <CardBadge key={`${data.name}-${item.type.name}`} data={item.type}>{item.type.name.toUpperCase()}</CardBadge>)
                        }
                    </CardBadgeContainer>
                </CardFooter>
            </Link>
        </CardContainer>
    )
}

export default Card;