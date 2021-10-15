

import React from "react";

const MovieContext = React.createContext({
      
    favMovieList:[],
    trendingMovieList:[],
    mostRatedMovieList:[],
    upcomingMovieList:[],
    searchResultList:[],
    loading:false,
    addFavList:(listitem)=>{},
    removeFavList:(id)=>{},
    showMovieDeatils : (id)=>{},
    showSearchResult : (moviename)=>{}
    

});


export default MovieContext;