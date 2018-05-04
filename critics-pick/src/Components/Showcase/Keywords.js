import React from 'react';

const Keywords = ({ keywords }) => {
  const buttons = keywords.map((word, index) => {
    return (
      <button key={index} type="button" className="keyword-pill btn btn-secondary btn-sm disabled">
        {word}
      </button>
    );
  });

  return (
    <div className="row">
      <div className="col keywords-col">
        <h3>Keywords</h3>
        <hr />
        {buttons}
      </div>
    </div>
  );
};

export default Keywords;
