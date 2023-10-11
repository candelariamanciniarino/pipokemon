import SearchBar from '../serchBar/serchBar';
import style from '.Navbar.module.css'
import {Link} from 'react-router-dom'

const NavBar =()=>{
 return(
    <div className='navbar-cont'>
        <div className='navbar-links-cont'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/create'}>create</Link>
        </div>
        <div className='navbar-search-cont'><SearchBar/></div>

    </div>
 )}

export default NavBar;