import React ,{useContext} from 'react'
import MovieContext from '../store/movie.context';
import MovieCard from '../UI/MovieCard';
import '../Styles/Subcomponents/_favoritelist.scss';

 const ShowFavoriteMovie =()=> {
     const movCtx=useContext(MovieContext);
    



    return (
        <div className="favoritelist--container">

          {movCtx.favMovieList.length===0 && 
           
           <div className="favoritelist--container-msg"> 
             <h1>Nothing To Show...........</h1>
          </div>
          }
            

          {movCtx.favMovieList.length>0 && 
           <div>
             <h1>Your Favorite Movies</h1>

              <div className="favoritelist--container-card grid-display">
                {movCtx.favMovieList.map((item)=>{
                
                  return(
                    
                      <MovieCard key={item.id} {...item} cardstyle='card-small'/>
                  
                )
                })}
             </div>
          </div>
         }
        </div>
    )
}

export default ShowFavoriteMovie;
