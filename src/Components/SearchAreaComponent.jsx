import React from 'react';

import '../Styles/_SearchAreaComponent.scss';


const SearchAreaComponent = () =>{

    return(
        <div className="searchform_container">
            <form>
                <input 
                   type="text" 
                   className="searchform_input"
                   placeholder="What're we looking for ?">
                 </input>
                <input  type="submit" className="searchform_btn"></input>
                
            </form>

        </div>
    )
}


export default SearchAreaComponent;