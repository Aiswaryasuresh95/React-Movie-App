import React,{useContext} from 'react';
import SearchAreaComponent from '../Components/SearchAreaComponent';
import '../Styles/HomePage/_HeaderComponent.scss';






const HeaderComponent = () =>{
  

    return(
        <div className="header">
            <div className="header_logo"><h1>FILMpile</h1></div>
            <SearchAreaComponent />
        </div>
    )
}



export default HeaderComponent;