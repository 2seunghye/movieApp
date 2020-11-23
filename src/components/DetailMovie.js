import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function DetailMovie({ cast, screen_1, screen_2, screen_3 }) {
  return (
    <div className="detail__cast_screen">
      {cast.map((cast) => (
        <div className="cast">
          <img src={cast.url_small_image} />
          <span>{cast.name}</span>
          <span>{cast.character_name} 역</span>
        </div>
      ))}

      <div className="screen">
        <img src={screen_1} />
        <img src={screen_2} />
        <img src={screen_3} />
      </div>
    </div>
  );
}

{
  /* <span>{cast.name}</span> */
}

DetailMovie.propTypes = {
  screen_1: PropTypes.string.isRequired,
  screen_2: PropTypes.string.isRequired,
  screen_3: PropTypes.string.isRequired,
  cast: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
