const axios = require ('axios');
const {Pokemon,Type} = require ('../db')//GET USER BY ID
const { Op  } = require('sequelize');
const {infoCleaner} = require ('../utils/index')

const URL = `https://pokeapi.co/api/v2/pokemon/`

//creamos un nuevo pokemon

const createPokemon = async( name, img, hp, attack, defense, sped, weight ) =>
{
const newPokemonDb = await Pokemon.create({name, img, hp, attack, defense, sped, weight})

    ////onst type = await Type.findAll({
       // where:{
          //  name: type
       // }
//})
// newPokemonDb.addType(type);
//await newPokemonDb.reload({
    //include:{
       // model:Type,
       // attributes:['name'],
        //through:{attributes:[]}
    //}
//})
return newPokemonDb
};


//GET POKEMON BY ID
//buscamos un usuario x ID en BD 


const getById = async (id, source) => {
    const user =
    source === 'api' //si source es igul a la api
    ? (await axios.get(`${URL}${id}`)).data
    : await Pokemon.findByPk(id);
      
    const pokencleaner = infoCleaner([user])
    return pokencleaner;
}


//GET ALL POKEMON
// Esta función getAllUsers obtiene información de usuarios tanto de
// una base de datos local como de una API externa. Luego, combina 
//los resultados de ambas fuentes en una sola lista de usuarios y la devuelve como resultado.


const getAllPokemon = async()=>{
    const pokemonDb = await Pokemon.findAll()
    const infoApi = await axios.get(`${URL}`);
   const pokemonsApiResult = infoApi.data.results;

   const pokemonDetailsPromises = pokemonsApiResult.map(async(pokemon)=>{
     const pokemonResponse = await axios.get(pokemon.url);
     return pokemonResponse.data;
    });

   const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    const formattedPokemons = infoCleaner(pokemonDetails)


    return [...pokemonDb,...formattedPokemons]

}




const getAllPokemons = async (name) => {
   //let pokemonDb = [];
   //let pokemonapi = [];
  
   const nameTolowerCase = name.toLowerCase();
      //Búsqueda en la base de datos
      const pokemonDb = await Pokemon.findOne({
        where: { name: nameTolowerCase }});
       if (pokemonDb) {
        return pokemonDb

      // Búsqueda en la API externa

      }else{
        const response = (`${URL}${nameTolowerCase}`);
     const{data} = await axios.get(response);

     if(data){
        const poke = infoCleaner([data]);
        return poke
      }
      }
  
    //Combinar y limpiar los resultados solo después de la búsqueda
     //allPokemon = pokemonDb.concat(pokemonapi);
    // pokemonMap = infoCleaner(allPokemon);
  
    //if (pokemonMap.length === 0 && name !== undefined) {
     // throw new Error("no existe este pokemon");
//}
  
   //return pokemonMap;
 };

        
module.exports ={
    getById,
    getAllPokemon,
    createPokemon,
    getAllPokemons

}

