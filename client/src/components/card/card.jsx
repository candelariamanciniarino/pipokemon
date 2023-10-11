import { Link } from 'react';
//import axios from 'axios';
import style from "./card.module.css";

 const Card = ({id, name, img, type}) => {
    return(
        <div className={style.card}>
            <img className={style.img} src={img} alt={name}/>
            <Link to={`/detail/${id}`}>
                <p className={style.name}>{name}</p>
                </Link>
                <p className={style.type}>Type:{Array.isArray(type)? type.join(','): ''}</p>

        </div>
    )
 }
 export default Card;
