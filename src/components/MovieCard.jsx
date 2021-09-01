import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { Col,Card,Button } from "react-bootstrap";
class MovieCard extends React.Component {
  render() {
      console.log(this.props.movie)
    return (
      <Link to="/showdetail">
      <a className="col-2 my-3" key={this.props.movieId}>
          <div className='movieCard h-100'>
              <img className='w-100' src={this.props.img}/>
            </div>
      </a>
     </Link>
    );
  }
}

export default withRouter(MovieCard);
