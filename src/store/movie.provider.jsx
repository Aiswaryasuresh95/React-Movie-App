import React,{useState}from 'react';
import MovieContext from './movie.context';

require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;





const MovieProvider = (props) =>{


    
     const [searchloading,setSearchLoading]=useState(false);
     const [searchlist,setSearchlist]=useState([]);
     const [searchresultmsg,setResultMsg] = useState('');
     const [moviesummary,setMovieSummary]=useState({});



     const searchResultHandler = (moviename) =>{
        
        
        const fetchMovie = async() =>{
             setSearchLoading(true);
            
            try{
                const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${moviename}`);
            
                const data = await response.json();
                const result=data.results;

                        if( result.length === 0){
                            setResultMsg('no Movies Found');
                        }
                    setSearchlist(result)
                    setSearchLoading(false)
            }
            catch(e){
                setResultMsg('Can not load from server');
                setSearchLoading(false)}}
         
        fetchMovie();
     }





    const ShowMovieHandler =(id)=> {

        const fetchMovie = async() =>{
            
           
           try{
               const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
               const data = await response.json();
               setMovieSummary(data)
               console.log(moviesummary)
           }
       
           catch(e){
               console.log('can not load from server')} }
        
       fetchMovie();
    }

        



    
   
// Movie context //

    const movieContext={
    
        


        showSearchResult :searchResultHandler,

        showMovieSummary :ShowMovieHandler,
        movieSummary:{...moviesummary},

        searchListItems : {
            searchResultList:[...searchlist],
            searchloading:searchloading,
            searchResultMsg:searchresultmsg
        }
        
    }
    
    
    
  



    return(
        <MovieContext.Provider value={movieContext}>
            {props.children}
        </MovieContext.Provider>
    )

}


export default MovieProvider;