import React from "react";
import '../Styles/_MovieCard.scss';

const MovieCard = ({...item}) =>{
    return(
       <div className="moviecard">
           <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.image} className="moviecard--img"/>
           <h1>{item.title}</h1>
       </div>
    )
}

export default MovieCard;