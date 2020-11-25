import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function DetailMovie({ screen_1, screen_2, screen_3 }) {
  return (
    <div className="detail__cast_screen">
      <div className="screen">
        <h3>Scenes</h3>
        <img src={screen_1} />
        <img src={screen_2} />
        <img src={screen_3} />
      </div>
    </div>
  );
}

DetailMovie.propTypes = {
  screen_1: PropTypes.string.isRequired,
  screen_2: PropTypes.string.isRequired,
  screen_3: PropTypes.string.isRequired,
};

export default DetailMovie;
