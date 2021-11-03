
import { useContext } from "react";
import HomePage from "./pages/HomePage";
import HeaderComponent  from "./pages/HeaderComponent";
import MovieProvider from "./store/movie.provider";
import MovieContext from "./store/movie.context";
import MovieSummary from "./pages/MoviesummaryPage";
import SearchResultComponent from "./Components/SearchResultComponent";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css'



const  App =() => {




  return (
  
    <MovieProvider>
      <HeaderComponent />
      <Switch>
        <Route path='/' component={HomePage} exact ></Route>
      
       <Route path='/result' component={SearchResultComponent} />
        <Route path='/summary/:id' component={MovieSummary} />
        <Redirect to='/' />

      </Switch>
    </MovieProvider>

  );
}

export default App;
