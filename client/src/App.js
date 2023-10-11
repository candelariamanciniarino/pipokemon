import './App.css';
import Landing from './views/Landing/Landing.component';
import Home from './views/Home/home.component';
import {Route, BrowserRouter} from 'react-router-dom';
import detail from './views/detail/detail.component'
//import Navbar from './components/Navbar/navbar.module.css';
import create from './views/create/create.component';
function App() {
  
  return (
    <div className="App">
   
        <BrowserRouter>
       
       
        <Route exact path={"/"} component={Landing} />
        <Route path={"/home" }component={Home} />
        <Route path={"/detail/:id"} component={detail} />
        <Route path={"/create"} component={create} />
        
        
        

        </BrowserRouter>
      
    </div>
  );
}

export default App;
