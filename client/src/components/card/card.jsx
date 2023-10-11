//import { Link } from 'react';
import style from "./card.module.css";
import React from 'react';

 const Card = ({id, name, img, type}) => {
    return(
        <div className={style.cardCont}>
            <div className={style.cardTitleCont}>
            <h4>{name}</h4>
            </div>
            <div className={style.cardInfoCont}>
            <h5> type: {type ? type.join(', ') : 'No type available'}</h5>
            <h5> id: {id}</h5>
            <div className={style.cardImgCont}>
                <img src={img} alt='imagen'/>

            </div>
            </div>
        </div>
    )
 }
 export default Card;
