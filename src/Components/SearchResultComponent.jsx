import React,{useContext,useState} from "react"
import MovieCard from "../UI/MovieCard"
import Loader from "../UI/Loader"
import MovieContext from "../store/movie.context"
import '../Styles/Subcomponents/_SearchResultComponent.scss';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 3 },
    { width: 800, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
  ];


const SearchResultComponent = () =>{
    const [showslider, setshowslider] = useState(false)
    const movCtx=useContext(MovieContext);

    const {searchResultList,searchResultMsg,searchloading}=movCtx.searchListItems;

 
   

    return(
    <section className="search--container">
        {searchloading && <Loader />}
        {searchResultMsg && <h1>{movCtx.searchListItems.searchResultMsg}</h1>}


        {searchResultList.length !== 0 ? 

       <div className="search--container-result">
        <h1 >Your Search Result</h1>
          <div className="grid-display">
            
        
            {searchResultList.map((item)=>{
            return(
                
                <MovieCard key={item.id} cardstyle='card-small' {...item}  />
    
            )
        })}
       </div>
       </div>  
    
        :
        null}

    </section>
    )



}

export default SearchResultComponent;