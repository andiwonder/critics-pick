import React from 'react';

const Summary = ({ summary, date, title }) => {
  return (
    <div className="row">
      <div className="col-8 showcase-main">
        <div className="row">
          <div className="col-4">
            <img src="./images/the_big_lebowski.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-8 pt-4 px-4 d-flex flex-row justify-content-around flex-wrap showcase-main-text">
            <h3>{title}</h3>
            <h3>{date}</h3>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
