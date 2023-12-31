const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon',
   {
     id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    img: {
      type: DataTypes.STRING,
      unique:false, 
    },

    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    
    },
    attack:{
    type: DataTypes.STRING,
      allowNull: false ,

    },
    defense :{
      type: DataTypes.STRING,
        allowNull: false ,
  
      },

      speed:{
        type: DataTypes.STRING,
        allowNull: true,
      },

      height:{
        type: DataTypes.STRING,
       
      },

      weight:{
        type: DataTypes. STRING,
       
      }

  },

  {timestamps: false});
};
