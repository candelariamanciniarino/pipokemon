import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Landing.module.css';


const Landing =()=> {
    return(
        <div className= {styles.fondo}>
            <title>El mundo del Pokemon </title>

            <Link to ='/home'> 
            <button>bienvenidos</button>
            </Link>
            </div>

    );
}
export default Landing;