import React ,{useContext} from 'react'
import MovieContext from '../store/movie.context';
import MovieCard from '../UI/MovieCard';
import '../Styles/Subcomponents/_favoritelist.scss';
import {RiDeleteBin5Line,RiDeleteBin5Fill} from 'react-icons/ri';


 const ShowFavoriteMovie =()=> {
     const movCtx=useContext(MovieContext);

     const handleRemoveitem = (id) =>{
       movCtx.removeFavList(id)
       
     }
    



    return (
        <div className="favoritelist--container">

          {movCtx.favMovieList.length===0 && 
           
           <div className="favoritelist--container-msg"> 
             <h1>Nothing To Show...........</h1>
          </div>
          }
            

          {movCtx.favMovieList.length>0 && 
           <div className="favoritelist--container-main" >
             <h1 className="favoritelist--heading">Your Favorite Movies</h1>

              <div className=" grid-display">
                {movCtx.favMovieList.map((item)=>{
                
                  return(
                      <div className="favoritelist--container-main-card">
                         <MovieCard key={item.id} {...item} cardstyle='card-small'/>
                         <RiDeleteBin5Fill className="icon"  onClick={()=>{handleRemoveitem(item.id)}}/>
                      </div>
        
                )
                })}
             </div>
               
          </div>
         }
        </div>
    )
}

export default ShowFavoriteMovie;
