import React from 'react'
import Row from '../Row/Row'
import request from '../../request'
import { useSContext } from '../context/SerchContext'
import Banner from '../Banner/Banner';
function Main() {
const {flag}=useSContext();
 
  return(
    flag?<div></div>:
    <div>
      <Banner/>
     <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={request.fetchNetflixOriginals}
      />
     <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  )
}

export default Main