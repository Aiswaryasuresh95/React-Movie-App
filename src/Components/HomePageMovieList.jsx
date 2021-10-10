import React, { useContext } from "react";
import MovieContext from "../store/movie.context";
import MovieCard from '../UI/MovieCard';



const HomePageMovieList = () =>{
    const movCtx=useContext(MovieContext);

    

    return(
        <section>
            <div>
                <h1>Trending movies</h1>
           {movCtx.trendingMovieList.map((item)=>{
               return(
                   <div key={item.id}>
                       <MovieCard  {...item} /> 
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
       
     
    )

}
export default HomePageMovieList;