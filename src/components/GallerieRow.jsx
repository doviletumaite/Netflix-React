import MovieCard from "./MovieCard";
import { Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchMovie } from "../data";

const GallerieRow = () => {
 const [movie, setMovie] = useState([])
 const [isLoading, setIsLoading] = useState(false)
  
 useEffect(() => {
   const movies = fetchMovie()
   if (movies) {
     setMovie(movie)
     setIsLoading(false)
   } else {
    setIsLoading(true)
   }
 }, [])

    return (
        <div className="row px-3 bg-black mt-3">
        <div className='col-12'>
            {/* <h2 className="text-white">{this.state.search}</h2> */}
        </div>
        {
          isLoading ?   
          <Spinner animation="grow" variant="warning" className="mx-auto my-5"/> 
          : 
          movie.map(mov => <div> <p> {mov.title} </p> <img src={mov.Poster} />
            </div>
            )
        }
        </div>
    );
  }


export default GallerieRow;
