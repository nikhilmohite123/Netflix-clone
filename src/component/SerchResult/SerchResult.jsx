import { useSContext } from '../context/SerchContext';
import './SerchResult.css'
function SearchResults() {
  const {result, flag, loading} = useSContext();
  const base_url = "https://image.tmdb.org/t/p/original"
  console.log(result, flag);
  return(
    <div className='search-results'>
      {loading && <p>loading...</p>}
      {flag && result.map((movie) => {
        return(        
          <div key={movie.id} className="movie-card">
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          </div>
        )

      })}
    </div>
  )

}

export default SearchResults;


//  context api 
//  way to create a global parent 
//  way create global state
//  way to provide the values to children
//  way to use these value in the components
