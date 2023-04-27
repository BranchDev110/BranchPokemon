import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../../Components/Loader";
import colours, { IColorTypes } from "../../constant/color";
import { EvolutionChain } from "../../Components/EvolutionChain";

interface DetailsInfoProps {
  type: keyof IColorTypes;
}

interface DetailsProgressBarProps {
  data: number;
  type: keyof IColorTypes;
}

interface DetailsContainerProps {
  data: number;
  type: keyof IColorTypes;
}

const DetailsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const DetailsInfo = styled.div`
  color: white;
  width: 500px;
  position: relative;
  left: 0;
  margin-top: 30px;
  background-color: rgba(100, 100, 100, 0.3);
  padding: 15px;
  &: before {
    position: absolute;
    content: "";
    left: 15px;
    top: 0;
    width: 50px;
    height: 5px;
    background-color: ${({ type }: DetailsInfoProps) => colours[type]};
  }
`;

const DetailsSecInfo = styled.div`
  color: white;
  width: 300px;
  position: absolute;
  right: 0;
  bottom: 50px;
  background-color: rgba(100, 100, 100, 0.3);
  padding: 15px;
  &: after {
    position: absolute;
    content: "";
    right: 15px;
    top: 0;
    width: 50px;
    height: 5px;
    background-color: ${({ type }: DetailsInfoProps) => colours[type]};
  }
`

const DetailsName = styled.p`
  font-size: 24px;
  letter-spacing: 2px;
  padding: 10px 0 20px;
`;

const DetailsType = styled.p`
  letter-spacing: 1.2px;
`;

const DetailsInfoText = styled.div`
  display: flex;
  margin: 5px 0;
`

const DetailsInfoLabel = styled.p`
  flex: 1;
  text-align: right;
  letter-spacing: 1.2px;
  font-size: 14px;
`

const DetailsInfoContent = styled.p`
  flex: 2;
  text-align: left;
  padding: 0 5px;
  letter-spacing: 1.2px;
  font-size: 14px;
`

const DetailsSkill = styled.div`
  position: relative;
  left: 0;
  margin-top: 30px;
`;

const DetailsSkillItem = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  color: white;
  margin: 20px 0;
`;

const DetailsSkillItemText = styled.div`
  flex: 1;
  text-align: right;
  letter-spacing: 2px;
`;

const DetailsSkillProgressBarContainer = styled.div`
  flex: 1.2;
  padding: 0 0 0 40px;
`;

const DetailsSkillProgressBar = styled.div<DetailsProgressBarProps>`
  background-color: ${({ type }: DetailsInfoProps) => colours[type]};
  width: ${({ data }) => data}%;
  height: 6px;
  position: relative;
  border-radius: 1rem;
  &: before {
    content: "${({ data }) => data}";
    position: relative;
    left: -30px;
    top: -6px;
    color: white;
  }
`;

const DetailsImageContainer = styled.div<DetailsContainerProps>`
	z-index: 2;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  &: before {
    position: absolute;
		z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -35%);
    border: 6px solid ${({ type }: DetailsInfoProps) => colours[type]};
    outline: 4px solid ${({ type }: DetailsInfoProps) => colours[type]};
    outline-offset: 30px;
    border-radius: 50%;
    width: 500px;
    height: 500px;
    content: "";
  }
  &: after {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 600px;
    height: 50px;
    border-top: 5px solid ${({ type }: DetailsInfoProps) => colours[type]};
    border-bottom: 5px solid ${({ type }: DetailsInfoProps) => colours[type]};
    transform: translate(-50%, 50px) rotate(-45deg) skew(-60deg);
  }
`;

const DetailsImage = styled.img`
	position: relative;
	z-index: 100;
`

const Detail = () => {
  const { name } = useParams();
	const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [evolution, setEvolution] = useState<any []>([]);
  const [isImageLoad, setIsImageLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
			setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      setData(result);
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
      const speciesResult = await speciesResponse.json();
      const evolutionResponse = await fetch(speciesResult["evolution_chain"]["url"]);
      const evolutionResult = await evolutionResponse.json();
      setEvolution(constructEvolutionData(evolutionResult["chain"], []));
      console.log(constructEvolutionData(evolutionResult["chain"], []));
			setIsLoading(false);
    };
    fetchData();
  }, [name]);

  const constructEvolutionData = (evolutionChain: any, name: any) => {
    name.push({id: evolutionChain.species.url.split("/").at(-2), name: evolutionChain.species.name, level: name.length});
    if(evolutionChain["evolves_to"].length > 0) {
      evolutionChain["evolves_to"].forEach((item: any) => constructEvolutionData(item, name))
    }
    return name;
  }

  const handleOnLoad = () => {
    setIsImageLoad(true);
  }

  return (
    <DetailsContainer>
      <DetailsImageContainer data={data?.id} type={data?.types[0].type.name}>
        <DetailsImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data?.id}.png`} onLoad={handleOnLoad}/>
      </DetailsImageContainer>
      <DetailsInfo type={data?.types[0].type.name}>
        <DetailsName>{data?.name?.toUpperCase()}</DetailsName>
        <DetailsType>
          TYPE:{" "}
          {data?.types
            ?.map((item: any) => item.type.name.toUpperCase())
            .join(" - ")}
        </DetailsType>
      </DetailsInfo>
      <DetailsSkill>
        {data?.stats.map((item: any) => (
          <DetailsSkillItem>
            <DetailsSkillItemText>
              {item.stat.name.toUpperCase()} :
            </DetailsSkillItemText>
            <DetailsSkillProgressBarContainer>
              <DetailsSkillProgressBar
                data={item["base_stat"]}
                type={data?.types[0].type.name}
              />
            </DetailsSkillProgressBarContainer>
          </DetailsSkillItem>
        ))}
      </DetailsSkill>
      <DetailsSecInfo type={data?.types[0].type.name}>
        <DetailsInfoText>
          <DetailsInfoLabel>WEIGHT : </DetailsInfoLabel>
          <DetailsInfoContent>{data?.weight}</DetailsInfoContent>
        </DetailsInfoText>
        <DetailsInfoText>
          <DetailsInfoLabel>HEIGHT : </DetailsInfoLabel>
          <DetailsInfoContent>{data?.height}</DetailsInfoContent>
        </DetailsInfoText>
      </DetailsSecInfo>
      <EvolutionChain evolution={evolution} type={data?.types[0].type.name}/>
			{
				isLoading && <Loader />
			}
    </DetailsContainer>
  );
};

export default Detail;
