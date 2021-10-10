

import React from "react";

const MovieContext = React.createContext({
      
    favMovieList:[],
    addFavList:(listitem)=>{},
    removeFavList:(id)=>{},
    showMovieDeatils : (id)=>{},
    trendingMovieList:[],
    mostRatedMovieList:[],
    upcomingMovieList:[]


});


export default MovieContext;