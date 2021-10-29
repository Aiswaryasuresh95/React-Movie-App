
import { useContext } from "react";
import HomePage from "./pages/HomePage";
import HeaderComponent  from "./pages/HeaderComponent";
import MovieProvider from "./store/movie.provider";
import MovieContext from "./store/movie.context";

import './App.css'



const  App =() => {




  return (
    <MovieProvider>
      <HeaderComponent />
       <HomePage />
    </MovieProvider>
  
  );
}

export default App;
