import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { setPokemon, setSearchedResult } from './app/slice/pokemonReducer';
import { setHistory } from './app/slice/historyReducer';

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const {pokemons, searchedResult} = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const { results } = await response.json();
      const detailResponse = await Promise.all(results.map(async ({url}: {url: string}) => await fetch(url)));
      const pokemon = await Promise.all(detailResponse.map(item => item.json()));
      dispatch(setPokemon(pokemon));
    }
    fetchData();
  }, [])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newSearchedResult = pokemons.filter((pokemon: any) => pokemon.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
    setSearchText(e.currentTarget.value);
    dispatch(setSearchedResult(newSearchedResult));
  }

  const handleClick = () => {
    const newSearchedResult = pokemons.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
    dispatch(setSearchedResult(newSearchedResult));
    dispatch(setHistory({key: searchText, value: newSearchedResult, date: new Date().toISOString()}));
  }
  return (
    <div className="App">
      <input onChange={handleChange} value={searchText}/>
      <button onClick={handleClick}>Search</button>
      {
        searchedResult.map((pokemon: any) => <div>{pokemon.name}</div>)
      }
    </div>
  );
}

export default App;
