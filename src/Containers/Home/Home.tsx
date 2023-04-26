import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setPokemon, setSearchedResult } from "../../app/slice/pokemonReducer";
import { setHistory } from "../../app/slice/historyReducer";
import styled from "styled-components";
import { InfiniteScroll } from "../../Components/InfinteScroll";

const SearchInput = styled.input`
  padding: 8px 15px;
  background: none;
  outline: none;
  border: 1px solid #666;
  color: white;
  font-size: 14px;
  width: 400px;
  border-radius: 1rem;
  margin: 30px 0;
  height: 30px;
`;

const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { pokemons, searchedResult } = useSelector(
    (state: RootState) => state.pokemon
  );
  const { value } = useSelector((state: RootState) => state.history);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const fetchData = async (page: number) => {
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
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const callbackAction = () => {
    setPage(page + 1);
  }

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
    setSearchText(searchString);
    dispatch(setSearchedResult(newSearchedResult));
    searchString !== "" &&
      dispatch(
        setHistory({
          key: searchText,
          value: newSearchedResult,
          date: new Date().toISOString(),
        })
      );
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    debounce(searchPokemon(e.currentTarget.value));
  };
  return (
    <div className="card__container">
      <SearchInput onChange={handleChange} value={searchText} />
      <InfiniteScroll listItems={searchedResult} callbackAction={callbackAction} isLoading={isLoading}/>
    </div>
  );
};

export default Home;
