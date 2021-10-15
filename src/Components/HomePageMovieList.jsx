import React, { useContext } from "react";
import MovieContext from "../store/movie.context";
import MovieCard from '../UI/MovieCard';
import Loader from "../UI/Loader";
import '../Styles/_HomePageMovieList.scss';



const HomePageMovieList = () =>{
    const movCtx=useContext(MovieContext);

   

    

    return(
        
        
        <section> 
            {movCtx.loading ? 
            <div className="loader--container"> 
            <Loader />   
            </div> 
          :
          <section>
            <div>
                <h1>Trending movies</h1>
           {movCtx.trendingMovieList.map((item)=>{
               return(
                  <div key={item.id}>
                      <MovieCard {...item} />
                  </div>
               )
           })}
           </div>

           <div>
               <h1>upcoming movies</h1>
               {movCtx.upcomingMovieList.map((item)=>{
                    return(
                        <div key={item.id}>
                            <MovieCard  {...item} /> 
                        </div>
                    )

               })}

           </div>

           <div>
               <h1>most rated movies</h1>
               {movCtx.mostRatedMovieList.map((item)=>{
                    return(
                        <div key={item.id}>
                            <MovieCard   {...item} /> 
                        </div>
                    )

               })}

           </div> 

          </section>
        }   
        </section>
       
     
    )

}
export default HomePageMovieList;