import {SerchBar} from '../serchBar/serchBar';
import style from '.Navbar.module.css'
import {Link} from 'react-router-dom'

const NavBar =()=>{
 return(
    <div className={style.container}>
        <SerchBar/>
        <button className={ style.button}>
            <Link to='/home'> HOME </Link>
        </button>


        <button className={style.button}>
            <Link to='/cretate'> CREATE </Link>
        </button>

    </div>

 );
};

export default NavBar;