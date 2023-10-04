const {Router} = require ('express');
const {getpokemonHandler, getByIdHandler,createPokemonHandler} = require('../handlers/PokemonHandlers');



const pokemonRouter = Router()

pokemonRouter.get("/",getpokemonHandler)
pokemonRouter.get("/:id",getByIdHandler )
pokemonRouter.post("/", createPokemonHandler)


module.exports = pokemonRouter;
