import axios from "../../axios";
import { useEffect, useState, isLargeRow } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original";
import "./Row.css";

function Row({ fetchUrl, title, isLargeRow }) {
  const [movieData, setMovieData] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    }
  }
  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      console.log(res.data.results);
      setMovieData(res.data.results);
    });
  }, []);
  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || movie.title)
        .then((url) => {
          const SerchParamS=new URL(url).searchParams.get('v');
          setTrailerUrl(SerchParamS);
        })
        .catch((e) => {
          console.log("not found");
        });
    }
  }
  

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className={"row_posters"}>
        {movieData &&
          movieData.map((movie) => {
            return (
              <img
                src={base_url + movie.poster_path}
                alt=""
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                onClick={() => {
                  handleClick(movie);
                }}
              />
            );
          })}
      </div>

      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
}

export default Row;
