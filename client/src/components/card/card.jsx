import React, { useEffect, useState } from 'react'
import { Link } from 'react';
import axios from 'axios';
import style from "./card.module.css";

export const card = ({url}) => { //Define un componente funcional llamado Card que recibe una prop llamada url.

    const [pokemonDetails, setpokemonDetail] = useState (null);

    useEffect(()=>{ //solicitud a la url para obtener detalles
        axios
        .get(url)
        .then ((response)=>{
            setpokemonDetail(response.data);
        })
        .catch((error)=>{
            console.error('error al obtener detalles, error');

        });

    }, [url]);


  return (
    <div className={style.card}>
        {pokemonDetails ?(
            <>
            <img className={style.img} src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
            <Link to={'/detail/${pokemonDetails.id}'}>
            <p className={style.name}>Name:{pokemonDetails.name}</p>
            </Link>

            //Muestra los tipos del Pokémon, que se obtienen del arreglo 
            <p className={style.types}>Types: {pokemonDetails.types.map((type)=> type.type.name).join(',')}</p>
             
             </>
        ):(

    <div>cargando</div>
  )}
  </div>
  );
};
export default card;