import React, { useContext } from "react";
import MovieContext from "../store/movie.context";
import MovieCard from '../UI/MovieCard';
import Loader from "../UI/Loader";
import '../Styles/HomePage/_HomePageMovieList.scss';
import Carousel from 'react-elastic-carousel'



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
  ];



const HomePageMovieList = () =>{
    const movCtx=useContext(MovieContext);
    const {trendingMovieList,upcomingMovieList,mostRatedMovieList}=movCtx;
   
    

    return(
        
        
        <section> 
            {movCtx.homeresultmsg ? 
            
            <h1>{movCtx.homeresultmsg}</h1>
            :

            movCtx.homeloading ?
                <div className="loader--container"> 
                <Loader />   
                </div> 
              :
              <section>
                  
                  <div>
            
                      <h1>Trending movies</h1>
                      <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={true}
                      showArrows={true}
                      >
                      {trendingMovieList.map((item)=>{
                       
                      return(
                       
                    
                           <MovieCard {...item} />
                        
                       
                         )
                        
                       })}
                        </Carousel>
                   </div>
                 
                
            
                    <div>
                    <h1>upcoming movies</h1>
                    <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={true}
                      showArrows={true}
                      >
                    {upcomingMovieList.map((item)=>{
                         return(
                             
                                 <MovieCard  {...item} /> 
                    
                         )
                        })}
                        </Carousel>
                   </div>
                
              
               
            
                   <div>
                   <h1>most rated movies</h1>
                   <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={true}
                      showArrows={false}
                      >
                   {mostRatedMovieList.map((item)=>{
                        return(
                            
                                <MovieCard   {...item} /> 
                
                        )
    
                   })}
                 </Carousel>
               </div> 
                </section>
        
              }  
         </section>
       
     
    )

}
export default HomePageMovieList;