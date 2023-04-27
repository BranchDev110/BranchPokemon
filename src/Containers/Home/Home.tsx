import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addPage, setPokemon, setSearchedResult, setSearchText } from "../../app/slice/pokemonReducer";
import { setHistory } from "../../app/slice/historyReducer";
import styled from "styled-components";
import { InfiniteScroll } from "../../Components/InfinteScroll";
import { Loader } from "../../Components/Loader";

const SearchInput = styled.input`
  padding: 18px 24px;
  background: none;
  outline: none;
  border: 1px solid #666;
  color: white;
  font-size: 14px;
  width: 400px;
  border-radius: 2rem;
  margin: 30px 0;
  height: 30px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 500px;
`

const Home = () => {
  const { pokemons, searchedResult, page, searchText } = useSelector(
    (state: RootState) => state.pokemon
  );  
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    const { results } = await response.json();
    const detailResponse = await Promise.all(
      results.map(async ({ url }: { url: string }) => await fetch(url))
    );
    const pokemon = await Promise.all(
      detailResponse.map((item) => item.json())
    );
    dispatch(setPokemon(pokemon));
    setIsLoading(false);
  }, [dispatch]);

  const callbackAction = useCallback(() => {
    if(searchText === "") {
      fetchData(page + 1);
      dispatch(addPage(page + 1));
    }
  }, [searchText, fetchData, dispatch, page]);

  useEffect(() => {
    if(page === -1){
      callbackAction();
    }
  }, [page, callbackAction]);

  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const searchPokemon: Function = (searchString: string) => {
    const newSearchedResult = pokemons.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchString.toLowerCase())
    );
    dispatch(setSearchText(searchString));
    dispatch(setSearchedResult(newSearchedResult));
    searchString !== "" &&
      dispatch(
        setHistory({
          key: searchString,
          value: newSearchedResult.map(item => ({"name": item.name, "id": item.id, "types": item.types})),
          date: new Date().toISOString(),
        })
      );
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    debounce(searchPokemon(e.currentTarget.value));
  };
  return (
    <HomeContainer>
      <SearchInput onChange={handleChange} value={searchText} />
      <InfiniteScroll listItems={searchedResult} callbackAction={callbackAction} isLoading={isLoading}/>
      {isLoading && <Loader />}
    </HomeContainer>
  );
};

export default Home;
