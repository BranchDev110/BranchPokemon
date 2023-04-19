import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const { results } = await response.json();
      const detailResponse = await Promise.all(results.map(async ({url}: {url: string}) => await fetch(url)));
      const pokemon = await Promise.all(detailResponse.map(item => item.json()));
      setPokemons(pokemon);
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      {
        pokemons.map((pokemon: any) => <div>{pokemon.name}</div>)
      }
    </div>
  );
}

export default App;
