import React,{useContext,useState} from "react"
import MovieCard from "../UI/MovieCard"
import Loader from "../UI/Loader"
import MovieContext from "../store/movie.context"
import Carousel from 'react-elastic-carousel'


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

    // if(searchResultList.length >4)
    // {
    //     setshowslider(true)
    // }

   
   

    return(
    <section>
        {searchloading && <Loader />}
        {searchResultMsg && <h1>{movCtx.searchListItems.searchResultMsg}</h1>}


        {searchResultList.length !== 0 ? 

          
            <Carousel breakPoints={breakPoints} >
            {searchResultList.map((item)=>{
            return(
                
                <MovieCard key={item.id} {...item}  />
    
            )
        })}
       </Carousel>
        
        
         





        :
        null}

    </section>
    )



}

export default SearchResultComponent;