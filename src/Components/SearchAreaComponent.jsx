import React ,{useEffect, useRef,useState,useReducer} from 'react';
import '../Styles/_SearchAreaComponent.scss';
import MovieContext from '../store/movie.context';


const SearchAreaComponent = () =>{
 const movCtx = useReducer(MovieContext);
 const [searchItem, setSearchItem] = useState('');
 const focusRef = useRef();

const handleSubmit  = (event) =>{
    event.preventDefault();
    

    movCtx.showSearchResult(searchItem);


}

const handleChange =(event) =>{
    event.preventDefault();
    setSearchItem(event.target.value);
}


 useEffect(() => {

     focusRef.current.focus();
 }, [])


    return(
        <div className="searchform_container">
            <form onSubmit={handleSubmit}>
                <input 
                   ref={focusRef}
                   type="text" 
                   value={searchItem}
                   className="searchform_input"
                   placeholder="What're we looking for ?"
                   onChange={handleChange}
                   
                   >
                 </input>
                <input  type="submit" className="searchform_btn"></input>
                
            </form>

        </div>
    )
}


export default SearchAreaComponent;