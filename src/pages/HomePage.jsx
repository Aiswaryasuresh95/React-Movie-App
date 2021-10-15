import React from 'react';
import SearchAreaComponent from '../Components/SearchAreaComponent';
import HomePageMovieList from '../Components/HomePageMovieList';
import { Fragment } from 'react';


const HomePage = () =>{
    return(
         <Fragment>
            <SearchAreaComponent/>
            <HomePageMovieList />
            
        </Fragment>
    )
}


export default HomePage;

