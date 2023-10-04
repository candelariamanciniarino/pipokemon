const {createPokemon,getAllPokemons, getById, getAllPokemon } = require('../controllers/PokemonControllers');  



const createPokemonHandler = async(req,res) =>{
    const{name, img, hp, attack, defense, sped, weight, types} = req.body;

    try{
        const response = await createPokemon(name, img, hp, attack, defense, sped, weight, types)
        res.status(200).json(response)
    }catch (error){
        res.status(400).json({error:error.message})
    }
}


const getByIdHandler = async (req, res)=>{
    const {id} = req.params;

    const source = isNaN(id) ? "bdd" : "api" // si id is NaN quiere decir que es de la BD (UUID), si no es Nan, es un numero y quiere decir que viene de la API

    try{
        const response = await getById (id,source)
        res.status(200).json(response)
    } catch (error){
        res.status(400).json({error:error.message})
    }
}

 
const getpokemonHandler = async (req,res) =>{
    const{name} = req.query
    try{
        if(name){
    
            const resultado = await getAllPokemons(name);
            res.status(200).json(resultado)
        }else{
            const response = await getAllPokemon()
            res.status(200).json(response)
        }
       
    } catch (error){
        res.status(400).json({error:error.message})
    }
} 
module.exports={getpokemonHandler, getByIdHandler,createPokemonHandler}