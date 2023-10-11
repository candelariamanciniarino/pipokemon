import axios from 'axios'
export const  GET_POKEMOS = 'GET_POKEMOS'
export const GET_TIPO_POKEMON = 'GET_TIPO_POKEMON'
export const  POST_POKEMON =  'POST_POKEMON'
export const FILTRAR = 'FILTRAR'
export const ORDENAR = 'ORDENAR'
export const PAGINATE = 'PAGINATE'



export const getPokemos = ()=>{
    return async function(dispatch){
        try{
         const response = await axios.get('http://localhost:3001/pokemon/')
        const pokemon = response.data
            dispatch({
                type:GET_POKEMOS,
                payload:pokemon,
            });
        } catch (error){

        }
    
}}

export const getTipoPokemon =()=>{
    return async function (dispatch){
        try{ const response = await axios.get('http://localhost:3001/pokemon/types/')
        console.log(response);
        dispatch({
            type:GET_TIPO_POKEMON,
            payload: response.data
        })

        }catch(error){

        }
     }
}
export const postPokemon = (state) =>{
    return async function (dispatch){
        try{
            const response = await axios.post('http://localhost:3001/pokemon/', state)
            console.log(response.data);
            console.log(state);
            dispatch({
                type: POST_POKEMON,
                payload: response.data
            })
        }catch (error){

        }
    }
}

export const filterPokemoAction= (types) =>{
    return async function(dispatch){
        try{
            dispatch({
                type:FILTRAR,
                payload:types
            })
        } catch (error) {

        }

    }
    
}

export const ordenarPokemonAction = (ordenar)=>{
return async function(dispatch){
try{
    dispatch({
        type: ORDENAR,
        payload: ordenar
    })
}catch (error) {

}
}
}


export const  paginadoPokemon = (ordenar) =>{
    return async function(dispatch){
     try {
        dispatch({
            type:PAGINATE,
            payload:ordenar
        })
     } catch (error){

     }
    }
}