import React from 'react';
import style from './cards.module.css';
import card from '../card/card';

 const CardsConteiner = ({cards}) => { // toma un argumento "cards" que se espera sea un array de objetos
  return (
    <div className={style.conteiner}>
        {cards.map((pokemon)=> (
            <card
            key= {pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            defense={pokemon.defense}
            attack={pokemon.attack}
            hp={pokemon.hp}
    
            />

        ))}

    </div>
  )
}
export default CardsConteiner