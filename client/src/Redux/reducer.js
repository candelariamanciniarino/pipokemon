
import { GET_POKEMOS, POST_POKEMON, GET_TIPO_POKEMON, FILTRAR, PAGINATE, ORDENAR } from "./actions";

const initialState = {
    pokemon: [],
    filter: false,
    currentPagina: 0,
    allTypes: [],
    allpokemonBackUp: [],
    pokemonfilter: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMOS:
            return {
                ...state,
                pokemon: action.payload,
                allpokemonBackUp: action.payload
            };
        case GET_TIPO_POKEMON:
            return {
                ...state,
                allTypes: action.payload
            };
        case POST_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.payload]
            };
        case PAGINATE:
            
            return {
                ...state,
                currentPagina: action.payload === 'next' ? state.currentPagina + 1 : state.currentPagina - 1
            };
        case FILTRAR:
            const filterByTypes = [...state.allpokemonBackUp].filter(pokemon => pokemon.type.includes(action.payload));
            return {
                ...state,
                pokemon: filterByTypes,
                filter: true
            };
        case ORDENAR:
            let ordenarByName = [...state.pokemon];
            if (action.payload === 'AZ') {
                ordenarByName.sort((prev, next) => prev.name.localeCompare(next.name));
            } else {
                ordenarByName.sort((prev, next) => next.name.localeCompare(prev.name));
            }
            return {
                ...state,
                pokemon: ordenarByName
            };
        default:
            return { ...state };
    }
};

export default rootReducer;