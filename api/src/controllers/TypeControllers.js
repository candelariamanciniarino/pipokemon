
const axios = require ('axios')
const {Type} = require ('../db')

require('dotenv').config();
const url = `https://pokeapi.co/api/v2/type`;

const getAllTypes = async () => {
  const response = await axios.get(`${url}`);
  const typeFromApi = response.data.results;

  for (const type of typeFromApi) {
    // Uso de await para asegurarse de que la operación se complete antes de continuar
    await Type.findOrCreate({
      where: { name: type.name },
    });
  }

  // Después de que todas las operaciones de inserción se completen, obtener los tipos
  const allTypes = await Type.findAll();
  return allTypes;
};

module.exports = getAllTypes;

module.exports = getAllTypes



