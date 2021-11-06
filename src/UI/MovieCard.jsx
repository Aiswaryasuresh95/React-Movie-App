import React from "react";
import '../Styles/_MovieCard.scss';
import img from '../assets/movieimage.jpg';
import {  BrowserRouter,Link } from 'react-router-dom';

const SIZE =['card-normal','card-small']

 
const MovieCard = ({cardstyle ,...item}) =>{

  const checkcardstyle=SIZE.includes(cardstyle) ? cardstyle : SIZE[0];


  
    return(

     

  
      <Link to={`/summary/${item.id}`}>

       <div className={`moviecard ${checkcardstyle}`}>
        
         { item.poster_path !== null ? 
           <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.image} className="moviecard--img"/>
           :
           <img src={img} alt={item.image} className="moviecard--img" /> 
 
         }
           <div className="moviecard--info">
             <h1 className="moviecard--info--title">{item.title}</h1>
           </div>
       </div>
       </Link>
      
    )
}

export default MovieCard;