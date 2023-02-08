import React  from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';

  // TMDB API key=ba4598293f58dfd1d318401ca31c49cd

const MovieCard = ({ movie }) => {
  const posterUrl =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl =`/movies/${movie.id}`
  return(
    <div className="col-mg-3 col-mg-3 col-2 my-4 ">
    <div classNameName="card">
  <img src={posterUrl} className="card-img-top" alt= {movie.original_title}  />
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
   
    <Link to ={detailUrl } className="btn btn-primary">show details</Link>
  </div>
</div>
</div>
  )
}

const SearchView = ({keyword ,searchResults}) => {
const title = `You are searching for ${keyword}`;

const resultHtml =searchResults?.map((obj, i) => {
   return <MovieCard movie={obj} key={i} />
  })
  
    return(
      <>
      <Hero text= {title} />
      {(resultHtml &&
       <div className="container">
        <div className="row">
          {resultHtml}
        </div>
         </div>
      ) 
      }
  
      </>
    )
  }
  export default SearchView;
