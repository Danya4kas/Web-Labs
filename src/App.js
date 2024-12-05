
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      setPokemonData(data.results);
    }
    fetchData();
  }, []);

  const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setSelectedPokemon(data);
  };

  const closeInfo = () => {
    setSelectedPokemon(null);  // Закрытие модального окна
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className="data-container">
        {pokemonData.map((pokemon, index) => (
          <div
            className="card-box"
            key={index}
            onClick={() => fetchPokemonDetails(pokemon.url)}
          >
            <h2>{pokemon.name}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>

      {selectedPokemon && (
        <div className="info-modal">
          <div className="info-container">
            <button className="close-button" onClick={closeInfo}>×</button>
            <h2>{selectedPokemon.name}</h2>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
              className="selected-image"
            />
            <p><strong>Abilities:</strong> {selectedPokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p><strong>Weight:</strong> {selectedPokemon.weight}</p>
            <p><strong>Height:</strong> {selectedPokemon.height}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
