import React from "react";


const MovieCard = ({...item}) =>{
    return(
       <div>
           <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.image}/>
           <h1>{item.title}</h1>
       </div>
    )
}

export default MovieCard;