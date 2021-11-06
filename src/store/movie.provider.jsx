import React,{useState}from 'react';
import MovieContext from './movie.context';
import { useHistory } from "react-router-dom";

require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;





const MovieProvider = (props) =>{


    
     const [searchloading,setSearchLoading]=useState(false);
     const [searchlist,setSearchlist]=useState([]);
     const [searchresultmsg,setResultMsg] = useState('');
     const [moviesummary,setMovieSummary]=useState({});
     const [favlist,setFavlist]=useState([]);

     const history = useHistory();


     const searchResultHandler = (moviename) =>{
        
        
        const fetchMovie = async() =>{
             setSearchLoading(true);
            
            try{
                const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${moviename}`);
                 history.push('/result')
                const data = await response.json();
                const result=data.results;

                        if( result.length === 0){
                            setResultMsg('No Movies Found');
                        }
                    setSearchlist(result)
                    setSearchLoading(false)
            }
            catch(e){
                setResultMsg('Can Not Load From server.....');
                setSearchLoading(false)}}
         
        fetchMovie();
     }





    const ShowMovieHandler =(id)=> {

        const fetchMovie = async() =>{
            
           
           try{
               const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
               const data = await response.json();
               setMovieSummary(data)
        
           }
       
           catch(e){
               console.log('Can Not Load From Server......')} }
        
       fetchMovie();
    }




    const addFavList = (id) =>{

        const fetchMovie = async() =>{
            try{
                const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setFavlist([...favlist,data])
                console.log(favlist)
            }
        
            catch(e){
                console.log('Can Not Load From Server......')} 
            }
        

      const existingindex=favlist.findIndex((item)=>item.id ==id);
      console.log(existingindex)
        
        if(existingindex>=0){
            setFavlist(favlist);
            console.log(favlist)
        }
        else{
            fetchMovie();
        }

        

    }

        



    
   
// Movie context //

    const movieContext={

        favMovieList:[...favlist],
        addFavList:addFavList,
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