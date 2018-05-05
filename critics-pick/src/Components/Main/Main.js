import React from 'react';
import data from '../../data/movies.json';
import { Link } from 'react-router-dom';

const Main = props => {
  const Movies = data.movies.map(movie => {
    const url = `/movie/${movie.id}`;
    return (
      <div className="movie-display-movie">
        <Link to={url}>
          <img src={movie.poster} className="img-fluid" alt="" />
        </Link>
        <div className="display-info">
          <h3>{movie.title}</h3>
          <h5>{movie.genres}</h5>
          <div className="d-flex flex-row flex-wrap">
            <div className="score d-inline-block mr-auto">
              <i className="fas fa-heart" />
              {movie.score}
            </div>
            <div className="add-icon d-inline-block">
              <i className="fas fa-plus" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid" id="movie-display">
      <div className="row">
        <div className="col-10 col-centered">
          <div className="row d-flex flex-row flex-wrap justify-content-between">{Movies}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
