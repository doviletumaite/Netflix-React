import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { fetchMovie } from "../data";

const MovieCard = (props) => {
    console.log("card props", props)
    return (
      <Link to="/details/:movieID">
      <a className="col-2 my-3" key={props.imdbID}>
          <div className='movieCard h-100'>
              <img className='w-100' src={props.Poster}/>
         
            </div>
      </a>
     </Link>
    );
}

export default withRouter(MovieCard);
