import React from 'react';
import './Pokecard.css'

const Pokecard = ({id, name, type, base_experience}) => {
   const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name} </h2>
            <img className="Pokecard-img" src={img} alt="{name}"/>
            <h3 className="Pokecard-type">Type: {type}</h3>
            <h3 className="Pokecard-exp">EXP: {base_experience}</h3>
        </div>
    )

}


export default Pokecard;