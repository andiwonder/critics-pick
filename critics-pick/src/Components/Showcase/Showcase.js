import React from 'react';
import Summary from './Summary';
import Keywords from './Keywords';
import Meta from './Meta';
import Review from './Review';

const Showcase = ({ data }) => {
  return (
    <div className="container-fluid" id="movie-showcase">
      <Summary summary={data.summary} date={data.releaseDate} title={data.title} />
      <Keywords keywords={data.keywords} />
      <Meta meta={data.meta} />
      <Review reviews={data.reviews} />
    </div>
  );
};

export default Showcase;
