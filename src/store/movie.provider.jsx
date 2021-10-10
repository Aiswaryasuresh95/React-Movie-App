import React,{useEffect}from 'react';
import App from '../App';
import MovieContext from './movie.context';
require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;

const MovieProvider = (props) =>{
    const movieContext={
        trendingMovieList:[],
        mostRatedMovieList:[],
        upcomingMovieList:[]
    }


    useEffect(()=>{

        const fetchMovie=async()=>{
        
            try{ 

            const trendingmovres=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const ratedmovres=await fetch(` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
            const upcomingmovres=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
    
            const trendingdata=await trendingmovres.json();
            const rateddata=await ratedmovres.json();
            const upcomedata=await upcomingmovres.json();
            
            movieContext.trendingMovieList=trendingdata.results;
            movieContext.mostRatedMovieList=rateddata.results;
            movieContext.upcomingMovieList=upcomedata.results;
            console.log(movieContext.trendingMovieList)
            }

            catch(e){
                console.log("canot load from server")
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