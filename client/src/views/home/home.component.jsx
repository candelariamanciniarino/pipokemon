//import { Route } from 'react';
import { useEffect} from "react";
import{useDispatch,useSelector} from 'react-redux';
import{getPokemos, getTipoPokemon,filterPokemoAction,paginadoPokemon, ordenarPokemonAction}from '../../Redux/actions';
import Cards from "../../components/Cards/Cards";

const Home = () => {
    
    const dispatch = useDispatch();
    const pokemonData = useSelector((state)=> state.pokemon);
    const allTypes = useSelector((state)=> state.allTypes);
    console.log(allTypes)
        

    useEffect(()=>{
        dispatch(getPokemos());
        dispatch(getTipoPokemon());
    }, [dispatch]);



    const Paginate = (event)=>{
        dispatch (paginadoPokemon(event.target.name))
    }
    const filterPokemon = (event)=>{
        const selectedType = event.target.options[event.target.selectedIndex].value;
        dispatch(filterPokemoAction(selectedType));
    };
    const orderPokemon = (event) =>{
        dispatch(ordenarPokemonAction(event.target.value));
    };
    
    return(
        <div>
           <div>
            <h2>filtros y ordenamiento:</h2>
            <span>ordenar por nombre:</span>
            <select onChange={orderPokemon}name="orden" id=''>
                <option value='AZ'> A-Z</option>
                <option value='ZA'> Z-A</option>
            </select>
            <select onChange={filterPokemon}name='tipo' id=''> {allTypes.map((todos)=>(
                <option key={todos} value={todos}>{todos}</option>

            ))}

            </select>

      </div>
      <div>
        <h2>paginado</h2>
        <button name='prev' onClick={Paginate}>prev</button> 
        <button name='next' onClick={Paginate}>next</button>
      </div>
      <h1>el mundo de los pokemon</h1>
      <Cards cards={pokemonData}/>

 </div>
    
    );
};

export default Home;

