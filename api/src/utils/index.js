const infoCleaner = (pokemons) => {
    //if(Array.isArray(pokemons)) {
//return [];
   
    return pokemons.map((pokemon) => {
        if(pokemon){
        return {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.front_default, 
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types
        };

   }
 
    
    });
}
    


module.exports = {

    infoCleaner
};