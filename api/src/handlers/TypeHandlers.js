const {getTypePokemon} = require ('../controllers/TypeControllers')


const getTypeHandler = async (req,res)=>{
try {
    const typePokemon = await getTypePokemon()
    res.status(200).json(typePokemon)
} catch (error) {
    res.status(400).json({error: error.message})
}
}

module.exports = {
    getTypeHandler
}


