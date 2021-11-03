import React,{useContext} from 'react';
import SearchAreaComponent from '../Components/SearchAreaComponent';
import '../Styles/HomePage/_HeaderComponent.scss';
import { BrowserRouter as Router,Link } from 'react-router-dom';






const HeaderComponent = () =>{
  

    return(
        <Router>
        <div className="header">
           <Link to='/'>
            <div className="header_logo"><h1>FILMpile</h1></div>
            </Link>

            <SearchAreaComponent />
            
        </div>
        </Router>
    )
}



export default HeaderComponent;