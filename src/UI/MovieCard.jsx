import React from "react";
import '../Styles/_MovieCard.scss';

const MovieCard = ({...item}) =>{
    return(
       <div className="moviecard">
           <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.image} className="moviecard--img"/> */}
           <div className="moviecard--info">
             <h1 className="moviecard--info--title">{item.title}</h1>
           </div>
       </div>
    )
}

export default MovieCard;