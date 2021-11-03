import React,{useContext,useEffect} from 'react';
import MovieContext from '../store/movie.context';
import '../Styles/Summarypage/_summaryPage.scss';


const MovieSummary = (props) =>{
    const movCtx=useContext(MovieContext);
    const id=props.match.params.id;


    useEffect(() => {
        
        movCtx.showMovieSummary(id)
    }, [props])

    const summary=movCtx.movieSummary;
  

    return(
        <section className="summary">
            <div className="summary--container" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${summary.backdrop_path}')`}} >
                <div  className="summary--container-img">
                   <img src={`https://image.tmdb.org/t/p/w500/${summary.poster_path}`}   alt={summary.title} />
                </div>
                <div className="summary--container-content">
                    <h1>{summary.title}</h1>

                   {/* {summary.genres.map((item)=>{
                      return(
                        
                        <h3>{item.name}</h3>
                    
                      )})} */}
                     
                    <a href={summary.homepage}>{summary.homepage}</a>

                    <p>{summary.overview}</p>
                    <h2>{summary.release_date}</h2>
                    <h2>{summary.status}</h2>
                </div>
            </div>
         </section>
    )

}


export default MovieSummary;

