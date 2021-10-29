import React,{useContext} from "react"
import MovieCard from "../UI/MovieCard"
import Loader from "../UI/Loader"
import MovieContext from "../store/movie.context"

const SearchResultComponent = () =>{
    const movCtx=useContext(MovieContext);

    const {searchResultList,searchResultMsg,searchloading}=movCtx.searchListItems;
   
   

    return(
    <section>
        {searchloading && <Loader />}
        {searchResultMsg && <h1>{movCtx.searchListItems.searchResultMsg}</h1>}

        {searchResultList.length !== 0 ? 
            searchResultList.map((item)=>{
            return(
                <div key={item.id}>
                <MovieCard  {...item}  />
                </div>
            )
        })
        :
        null}

    </section>
    )



}

export default SearchResultComponent;