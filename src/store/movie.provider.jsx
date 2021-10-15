import React,{useEffect,useState,useReducer}from 'react';
import App from '../App';
import MovieContext from './movie.context';
require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;

const defaultMovieState ={
    searchresult:[]

}

const movieReducer = (state,action) =>{
    if(action.type==='SEARCH'){
        console.log('search');

    }

  return defaultMovieState;
}






const MovieProvider = (props) =>{
    
    const [movieState, dispathMovieAction] = useReducer(movieReducer, defaultMovieState)


     const [trending, setTrending] = useState([]);
     const [upcoming,setUpcoming] =useState([]);
     const [rated,setRated]=useState([]);
     const [loading,setLoading]=useState(false);

     const searchResultHandler = (moviename) =>{
        // dispathMovieAction({type : 'SEARCH' , moviename : moviename})
        console.log("hgghghhg");

     }



    const movieContext={
        trendingMovieList:[...trending],
        mostRatedMovieList:[...rated],
        upcomingMovieList:[...upcoming],
        searchResultList:[],
        loading:loading,

        showSearchResult : searchResultHandler
        
    }
    
    const showLoader = () =>{
      setLoading(true)
    }
    const hideLoader = () =>{
        setLoading(false)
    }

    useEffect(()=>{

        const fetchMovie=async()=>{
             showLoader();
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
            hideLoader();

            }

            catch(e){
                console.log("can't load from server")
            }

        }
  fetchMovie();

},[]);




    return(
        <MovieContext.Provider value={movieContext}>
            {props.children}
        </MovieContext.Provider>
    )

}


export default MovieProvider;