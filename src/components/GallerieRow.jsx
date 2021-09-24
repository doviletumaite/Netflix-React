import MovieCard from "./MovieCard";
import { Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchMovie } from "../data";

const GallerieRow = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (id) => {
    try {
      let movies = await fetchMovie(id);
     
      if (movies) {
        setMovie(movies);
        //  console.log("that film", movies);
        setIsLoading(false);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="row px-3 bg-black mt-3">
      <div className="col-12">
        {/* <h2 className="text-white">{this.state.search}</h2> */}
      </div>
      {isLoading ? (
        <Spinner animation="grow" variant="warning" className="mx-auto my-5" />
      ) : (
        movie.slice(0,6).map((mov) => (
          <div>
            <MovieCard src={mov.Poster} key={mov.imdbID} title={mov.title} /> 
            <p> {mov.title} </p> <img src={mov.Poster} />
          </div>
        ))
      )}
    </div>
  );
};

export default GallerieRow;
