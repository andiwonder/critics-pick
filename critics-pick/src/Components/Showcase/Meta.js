import React from 'react';

const Meta = ({ meta }) => {
  return (
    <div className="row stats-col">
      <div className="col-12 px-0">
        <h3>Meta Information</h3>
        <hr />
      </div>
      <div className="col-12 px-0 d-flex flex-row flex-wrap justify-content-between ">
        <div className="stats-box">
          <h5>Genre</h5>
          {meta.genre.join(',')}
          <hr />
          <h5>Runtime</h5>
          <h3>{meta.runtime}</h3>
        </div>
        <div className="stats-box">
          <h5>Budget</h5>
          <h3>{meta.budget}</h3>
          <hr />
          <h5>Revenue</h5>
          <h3>{meta.revenue}</h3>
        </div>
        <div className="stats-box">
          <h5>Popularity:</h5>
          <h3>{meta.popularity}</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Meta;
