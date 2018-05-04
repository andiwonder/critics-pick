import React from 'react';

const Landing = props => {
  return (
    <div className="container-fluid" id="movie-landing">
      <div className="row">
        <div className="col">
          <div className="d-block movie-title mb-4">
            <h1> The Big Lebowski</h1>
          </div>
          <div className="d-flex flex-row flex-wrap mb-4">
            <h3 className="genre-label">Comedy</h3>
            <h3 className="genre-label">Crime</h3>
          </div>
          <div className="mb-5">
            <button type="button" className="btn btn-warning trailer-btn">
              Watch Trailer <i className="fas fa-play-circle" />
            </button>
          </div>
          <div className="w-75">
            <img src="./images/metacritic-reviews.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
