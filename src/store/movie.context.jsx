

import React from "react";

const MovieContext = React.createContext({
      
    favMovieList:[],
    trendingMovieList:[],
    mostRatedMovieList:[],
    upcomingMovieList:[],
    homeloading:false,
    homeresultmsg:'',
    addFavList:(listitem)=>{},
    removeFavList:(id)=>{},
    showMovieDeatils : (id)=>{},
    showSearchResult : (moviename)=>{},
    searchListItems : {
        searchResultList:[],
        searchloading:false,
        searchResultMsg:''
    }

});

export default MovieContext;