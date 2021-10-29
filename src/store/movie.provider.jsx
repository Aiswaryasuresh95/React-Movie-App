import React,{useEffect,useState,useReducer}from 'react';
import App from '../App';
import MovieContext from './movie.context';
require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;
// https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${action.moviename}



// const movieReducer = (state,action) =>{
  


  
// }






const MovieProvider = (props) =>{
    // reducer and state decalration//
    
    //  const [movieState, dispathMovieAction] = useReducer(movieReducer, defaultMovieState)
     

     const [trending, setTrending] = useState([]);
     const [upcoming,setUpcoming] =useState([]);
     const [rated,setRated]=useState([]);
     const [homeloading,setHomeLoading]=useState(false);
     const [homeresultmsg, sethomeresultmsg] = useState('');
     const [searchloading,setSearchLoading]=useState(false);
     const [searchlist,setSearchlist]=useState([]);
     const [searchresultmsg,setResultMsg] = useState('');

       
  

    //   api calls for movie list when loading pages//
      useEffect(()=>{
  
          const fetchMovie=async()=>{
                setHomeLoading(true)
              try{ 
  
              const trendingmovres=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
              const ratedmovres=await fetch(` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
              const upcomingmovres=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
      
              const trendingdata=await trendingmovres.json();
              const upcomedata=await upcomingmovres.json();
              const rateddata=await ratedmovres.json();
  
                
              
              setTrending([...trendingdata.results]);
              setUpcoming([...upcomedata.results]);
              setRated([...rateddata.results]);
              setHomeLoading(false)
  
              }
  
              catch(e){
                 sethomeresultmsg('can not load from server');
                 setHomeLoading(false);
              }
  
          }
    fetchMovie();
  
  },[]);
  

  //reducer dispatch call functions//

     const searchResultHandler = (moviename) =>{
        
        const fetchMovie = async() =>{
             setSearchLoading(true);
            
            try{
                const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${moviename}`);
                console.log(response)
                const data = await response.json();
                const result=data.results;

                if( result.length === 0){
                    setResultMsg('no Movies Found');
                }


                setSearchlist(result);
                setSearchLoading(false)

            }
            catch(e){
                setResultMsg('Can not load from server');
                
                setSearchLoading(false)
            }


         }
         
        fetchMovie();
     }
    
   
// Movie context //

    const movieContext={
        trendingMovieList:[...trending],
        mostRatedMovieList:[...rated],
        upcomingMovieList:[...upcoming],
        homeloading:homeloading,
        homeresultmsg:homeresultmsg,
        showSearchResult :searchResultHandler,

        searchListItems : {
            searchResultList:[...searchlist],
            searchloading:searchloading,
            searchResultMsg:searchresultmsg
        }
        
    }
    
    
    
  



    return(
        <MovieContext.Provider value={movieContext}>
            {props.children}
        </MovieContext.Provider>
    )

}


export default MovieProvider;