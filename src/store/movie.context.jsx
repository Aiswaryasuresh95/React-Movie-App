

import React from "react";

const MovieContext = React.createContext({
      
    favMovieList:[],
    addFavList:(id)=>{},
    removeFavList:(id)=>{},
    showSearchResult : (moviename)=>{},
    showMovieSummary :(id)=>{},
    movieSummary:{},
    searchListItems : {
        searchResultList:[],
        searchloading:false,
        searchResultMsg:''
    }

});

export default MovieContext;