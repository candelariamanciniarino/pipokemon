import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './create.module.css'
import { getTipoPokemon, postPokemon } from '../../Redux/actions';


const Create = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state)=>state.allTypes);

  useEffect(()=>{
  dispatch(getTipoPokemon())
  },[dispatch]);


  const [state, setState] = useState ({
    name:'',
    hp:0,
    img:'',
    defense:0,
    types:[],
    attack:0
  });
  const [errors,setErrors] = useState ({
    name:'',
    hp:0,
    img:'',
    defense:0,
    types:'',
    attack:0
  });



  const validate =(state, name) => {
    switch(name){
      case 'name':
        if(state.name ==='') {
          setErrors ({...errors, name:'campo obligatorio'});
        }else if(state.name.length >20){
          setErrors({...errors, name:'muy largo el nombre'});
        }else {
          setErrors({...errors, name:''})
        }
        break;


        default:
          break;
    }
  };

  const handleChange = (event)=>{
    const property = event.target.name;
    const value = event.target.value;


    if(event.target.name === 'types'){
      setState({
        ...state,
        types:[...state.types, event.target.value]
      });
    } else {
      setState({
        ...state,
        [property]:value
      });

    }
    validate(
      {
        ...state,
        [property]:value
      },
      property
    );
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(postPokemon(state));
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <h2>crear el pokemon </h2>
        <label>name:</label>
        <input  onChange={handleChange} type= 'text' name='name'value={state.name} />
        <div>
          <p>{errors.name}</p>
        </div>

        <label>img:</label>
        <input onChange={handleChange} type= 'text' name='img' value={state.img} />

        <label>vida:</label>
        <input onChange={handleChange} type= 'text' name='hp' value={state.hp}/>

        <label>defensa:</label>
        <input onChange={handleChange} type= 'text' name='defense' value={state.defense}/>

        <label>tipos:</label>
        <select onChange={handleChange}  name='types' id=''> 
          {allTypes.map((tipo)=>(
            <option key={tipo} value={tipo}>{tipo} </option>))}
          </select>
          
        <label>ataque:</label>
        <input onChange={handleChange} type= 'text' name='attack' value={state.attack}/>
        

        <div> {state.types.map((tipo)=> (
          <span key= {tipo}>{tipo}</span> 
          ))}
        </div>
      </form>
    </div>
  );
};
export default Create;
