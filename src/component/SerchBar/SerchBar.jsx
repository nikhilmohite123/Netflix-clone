import {useState} from 'react'
import './serchBar.css'
import {useSContext} from '../context/SerchContext'


function SerchBar() {
const {query,setQuery,flag,setFalg,serch}=useSContext();
    
console.log(flag);
const cancelSearch = () => {
    setQuery('');
    setFalg(false)
    setResults([]);
  
  }

  const handleSubmit = () => {
    if(query) {
      serch();
     
    
    }
  }
  return (
    <div className='search-form'>
        <input type="text" placeholder='searchMovies' className='search-input' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        {flag && <button type="button" className="cancel-button" onClick={cancelSearch}>X</button>}
      {!flag && <button type="button" className="search-button" onClick={handleSubmit}>search</button>}
    </div>
  )
}

export default SerchBar