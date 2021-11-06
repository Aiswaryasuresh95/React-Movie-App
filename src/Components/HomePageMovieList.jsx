import React, { useContext } from "react";
import MovieContext from "../store/movie.context";
import MovieCard from '../UI/MovieCard';
import Loader from "../UI/Loader";
import '../Styles/HomePage/_HomePageMovieList.scss';
import Carousel from 'react-elastic-carousel'



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 3 },
    { width: 800, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
  ];


const HomePageMovieList = (props) =>{

    const {trending,rated,upcoming,errmsg,loading}=props;
   
    

    return(
        
        
        <section className="home--container"> 
        
            {errmsg ? 
            <div className="msg--center">
            <h1>{errmsg}</h1>
            </div>
            :

            loading ?
                <div className="loading--center"> 
                <Loader />   
                </div> 
              :
            

              <section>
                  
                  <div className="home--container-trending margin">
            
                      <h1>Trending movies</h1>
                      <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={true}
                      showArrows={true}
                      >
                      {trending.map((item)=>{
                       
                      return(
                       
                    
                           <MovieCard key={item.id} {...item} />
                        
                       
                         )
                        
                       })}
                        </Carousel>
                   </div>
                 
                
            
                    <div className="home--container-upcoming margin">
                    <h1>Upcoming Movies</h1>
                    <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={true}
                      showArrows={true}
                      >
                    {upcoming.map((item)=>{
                         return(
                             
                                 <MovieCard key={item.id}  {...item} /> 
                    
                         )
                        })}
                        </Carousel>
                   </div>
                
              
               
            
                   <div className="home--container-rated margin">
                   <h1>most rated movies</h1>
                   <Carousel 
                      breakPoints={breakPoints}
                      pagination={false}
                      enableSwipe={true}
                      showArrows={true}
                      >
                   {rated.map((item)=>{
                        return(
                            
                                <MovieCard  key={item.id}  {...item} /> 
                
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