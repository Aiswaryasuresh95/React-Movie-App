import React ,{useContext}from 'react';
import SearchAreaComponent from '../Components/SearchAreaComponent';
import HomePageMovieList from '../Components/HomePageMovieList';
import SearchResultComponent from '../Components/SearchResultComponent';
import { Fragment } from 'react';

import MovieContext from '../store/movie.context';


const HomePage = () =>{
    // const movCtx=useContext(MovieContext);
    // const result=movCtx.searchListItems.searchResultList;
    



  

    return(
         <Fragment>
        
             <SearchResultComponent/>
            <HomePageMovieList />
            
        </Fragment>
    )
}


export default HomePage;

