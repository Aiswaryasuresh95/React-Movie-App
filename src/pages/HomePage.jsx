import React ,{useContext,useState,useEffect}from 'react';
import SearchAreaComponent from '../Components/SearchAreaComponent';
import HomePageMovieList from '../Components/HomePageMovieList';
import SearchResultComponent from '../Components/SearchResultComponent';
import { Fragment } from 'react';

require('dotenv').config();

const API_KEY=process.env.REACT_APP_API_KEY;


const HomePage = () =>{
    

    const [trending, setTrending] = useState([]);
    const [upcoming,setUpcoming] =useState([]);
    const [rated,setRated]=useState([]);
    const [homeloading,setHomeLoading]=useState(false);
    const [homeresultmsg, sethomeresultmsg] = useState('');


    useEffect(()=>{
  
        const fetchMovie=async()=>{
              setHomeLoading(true)
            try{ 

            const trendingmovres=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const ratedmovres=await fetch(` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
            const upcomingmovres=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
    
            const trendingdata=await trendingmovres.json();
            const upcomedata=await upcomingmovres.json();
            const rateddata=await ratedmovres.json();

              
            
            setTrending([...trendingdata.results]);
            setUpcoming([...upcomedata.results]);
            setRated([...rateddata.results]);
            setHomeLoading(false)

            }

            catch(e){
               sethomeresultmsg('can not load from server');
               setHomeLoading(false);
            }

        }
  fetchMovie();

},[]);
    



  

    return(
         <Fragment>
        
             {/* <SearchResultComponent/> */}
            <HomePageMovieList 
            trending={trending} 
            rated={rated} 
            upcoming={upcoming} 
            errmsg={homeresultmsg} 
            loading={homeloading} />
            
        </Fragment>
    )
}


export default HomePage;

