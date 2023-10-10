import React from "react";
import styles from './pagination.module.css'


const Pagination = ({cardsPerPage, totalCards, currentPage, paginate}) =>{
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i ++){
        pageNum.push(i);
    }
    return(
        <nav>
            <ul className={styles.Pagination}>
                {currentPage !== 1 && (
                    <li className={styles.paginaItem}>
                        <button onClick={()=> paginate(currentPage - 1)}className={styles.paginnaLink}>
                            anterior </button>

                            </li>

                )}
                {pageNum.map((numero)=>(
                    <li key={numero} className={`$styles.pageItem} ${currentPage === numero ? styles.active: ''}`}>

                        <button onClick={()=>paginate(numero)} className={styles.paginnaLink}> {numero}</button>



                    </li>
                ))}
                {currentPage !== Math.ceil(totalCards / cardsPerPage)&& (
                    <li className={`${styles.paginaItem} ${currentPage === Math.ceil(totalCards / cardsPerPage) ? styles.disabled :''}`}>
                        <button onClick={()=>paginate(currentPage + 1)} className={styles.paginnaLink}> next  </button>
                    </li>
                )}

            </ul>
        </nav>
    );
};
export default Pagination;