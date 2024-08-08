import React from 'react';
import Pokedex from './Pokedex';

import './App.css';
import Pokecard from "./Pokecard";

function App() {
  return (
      <div className="Pokedex-container">
      <h1 className="Pokedex-title"> Pokedex</h1>

    <div className="Pokedex">
    {Pokedex.map(p => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
            />
        ))}
    </div>
      </div>
  );
}

export default App;
