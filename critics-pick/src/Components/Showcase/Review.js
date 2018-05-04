import React from 'react';

const Review = ({ reviews }) => {
  const reviewBoxes = reviews.map((review, index) => {
    let scoreClass = '';
    if ((review.score <= 60) & (review.score > 30)) {
      scoreClass = 'score-medium';
    } else if (review.score <= 30) {
      scoreClass = 'score-low';
    }

    return (
      <div className="col-4 review-box">
        <div className="review-score">
          <h5 className={scoreClass}>{review.score}</h5>
          <h3> {review.publication} </h3>
          <br />
          <h3> {review.reviewer} </h3>
        </div>
        <p>{review.review}</p>
      </div>
    );
  });

  return (
    <div className="row review-row d-flex flex-row flex-wrap justify-content-between">
      <div className="col-12 px-0">
        <h3>Reviews</h3>
        <hr />
      </div>
      {reviewBoxes}
    </div>
  );
};

export default Review;
