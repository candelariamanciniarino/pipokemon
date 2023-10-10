import { GET_POKEMOS,POST_POKEMON,GET_TIPO_POKEMON,FILTRAR,PAGINATE,ORDENAR } from "./actions";



const initialState = {
    pokemon:[],
    filter: false,
    currentPagina: 0,
    allTypes:[],
    allpokemonBackUp:[],
    pokemonfilter:[]
}

const rootReducer = (state = initialState,action)=>{
    const ITEMS_POR_PAGINA = 27
    switch(action.type){
        case GET_POKEMOS:
            return{...state,pokemon:[...action.payload].splice(0, ITEMS_POR_PAGINA),
            allpokemonBackUp:action.payload
        }
        case GET_TIPO_POKEMON:
            return{
                ...state,
                alltypes:action.payload
            }
        case POST_POKEMON:
            return{...state,
            pokemon:[...state.pokemon,action.payload]
        }
        case PAGINATE:
            const next_pagina = state.currentPagina + 1
            const prev_pagina = state.currentPagina - 1
            const firstIndex = action.payload === 'next'? next_pagina * ITEMS_POR_PAGINA : prev_pagina * ITEMS_POR_PAGINA
            
            if(state.filter){
                if(action.payload === 'next' && firstIndex >= state.pokemonfilter.length) 
                return state
            else if(action.payload === 'prev' && prev_pagina < 0) return state

            return {
                ...state,
                pokemon:[...state.pokemonfilter].splice(firstIndex,ITEMS_POR_PAGINA),
                currentPagina: action.payload === 'next'? next_pagina : prev_pagina 
            }
        }

            case FILTRAR:
                const filterByTypes =[ ...state.allpokemonBackUp].filter((pagina)=>pagina.type.includes(action.payload))
                return {
                    ...state,
                    pokemon: filterByTypes.splice(0, ITEMS_POR_PAGINA),
                    pokemonfilter: filterByTypes,
                    filter:true
                }
             case ORDENAR:
                let ordenarByName =[];
                if(action.payload === 'AZ') {
                    ordenarByName = [...state.allpokemonBackUp].sort((prev,next)=>{
                        if(prev.name.toLowerCase()< next.name.toLowerCase()) return 1;

                        if(prev.name.toLowerCase()< next.name.toLowerCase()) return -1;

                        return 0;

                });
                } else {
                    ordenarByName = [...state.allpokemonBackUp].sort((prev,next)=> {
                        if(prev.name.toLowerCase()< next.name.toLowerCase()) return -1;
                        if(prev.name.toLowerCase()< next.name.toLowerCase()) return 1;
                        return 0;

                    });
                }  

                return {
                    ...state,
                    pokemon:ordenarByName.splice(0,ITEMS_POR_PAGINA),
                    allpokemonBackUp: ordenarByName,
                };
            default:
                return{...state}    

        }

    };

export default rootReducer