import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colours, { IColorTypes } from "../../constant/color";
import { Loader } from "../Loader";

interface ColorProps {
  type: keyof IColorTypes;
}

const EvolutionChainContainer = styled.div<ColorProps>`
  position: absolute;
  min-width: 600px;
  left: 0;
  bottom: 20px;
  background-color: rgba(100, 100, 100, 0.3);
  padding: 20px 0;
  &: before {
    position: absolute;
    content: "";
    left: 15px;
    top: 0;
    width: 50px;
    height: 5px;
    background-color: ${({ type }: ColorProps) => colours[type]};
  }
`;

const EvolutionChainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EvolutionChainItem = styled.div`
  position: relative;
  width: 160px;
  padding: 20px;
  background-color: rgba(30, 30, 30, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const EvolutionChainImageContainer = styled.div<ColorProps>`
  position: relative;
  width: 100%;
  height: 125px;
  border-left: 2px solid ${({ type }: ColorProps) => colours[type]};
  border-bottom: 5px solid ${({ type }: ColorProps) => colours[type]};
  border-radius: 50%;
  margin-bottom: 10px;
  overflow: hidden;
`;

const EvolutionChainImage = styled.img`
  width: 100%;
`;

const EvolutionChainItemText = styled.p`
  font-size: 14px;
  color: white;
  letter-spacing: 1.2px;
  margin: 5px 0;
`;

const EvolutionChainTitle = styled.p`
  font-size: 24px;
  color: white;
  letter-spacing: 1.2px;
  padding: 20px;
`;

const EvolutionImageItem = ({ type, id }: any) => {
  const [isLoad, setIsLoad] = useState(false);
  const handleOnLoad = () => {
    setIsLoad(true);
  };
  return (
    <EvolutionChainImageContainer type={type}>
      {!isLoad && <Loader />}
      <EvolutionChainImage
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        onLoad={handleOnLoad}
      />
    </EvolutionChainImageContainer>
  );
};

const EvolutionChain = ({ evolution, type }: any) => {
  return (
    <EvolutionChainContainer type={type}>
      <EvolutionChainTitle>Evolution List</EvolutionChainTitle>
      <EvolutionChainContent>
        {evolution.map((item: any) => (
          <Link to={`/details/${item.id}`} key={`evolution-${item.id}`}>
            <EvolutionChainItem>
              <EvolutionImageItem type={type} id={item.id} />
              <EvolutionChainItemText>
                {item.name.toUpperCase()}
              </EvolutionChainItemText>
              <EvolutionChainItemText>
                Evolution : {item.level + 1}
              </EvolutionChainItemText>
            </EvolutionChainItem>
          </Link>
        ))}
      </EvolutionChainContent>
    </EvolutionChainContainer>
  );
};

export default EvolutionChain;
