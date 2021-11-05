import React ,{useContext} from 'react'
import MovieContext from '../store/movie.context';
import MovieCard from '../UI/MovieCard';

 const ShowFavoriteMovie =()=> {
     const movCtx=useContext(MovieContext);
    



    return (
        <div className="summary--page">
           {movCtx.favMovieList.map((item)=>{
             
             return(
               <div>
              <MovieCard key={item.id} {...item} cardstyle='card-small'/>
              </div>
           )
           })}
        
        </div>
    )
}

export default ShowFavoriteMovie;
