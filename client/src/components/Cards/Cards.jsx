import React from 'react';
import style from './cards.module.css';
import Card from '../card/card';
import { useSelector } from 'react-redux';

 const Cards = () => {// toma un argumento "cards" que se espera sea un array de objetos

  const allPokemon = useSelector(state => state.allpokemonBackUp)
  return (
    <div className={style.conteiner}>
        {allPokemon.map((pokemon)=> (
            <Card
            key= {pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            defense={pokemon.defense}
            attack={pokemon.attack}
            hp={pokemon.hp}
            type={pokemon.type}
    
            />

        ))}

    </div>
  )
}
export default Cards;