import React,{useContext} from 'react';
import SearchAreaComponent from '../Components/SearchAreaComponent';
import '../Styles/HomePage/_HeaderComponent.scss';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';







const HeaderComponent = () =>{
  

    return(

        <div className="header">
           <Link to='/'>
            <div className="header--logo"><h1>FILMpile</h1></div>
            </Link>

            <SearchAreaComponent />
            <div>
                <Link to='/favorite'>
                <BsHeartFill className="header--icon" size={35} />
                </Link>
                
            </div>

            
        </div>
    
    )
}



export default HeaderComponent;