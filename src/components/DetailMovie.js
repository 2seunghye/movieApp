import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function DetailMovie({ cast, screen_1, screen_2, screen_3 }) {
  return (
    <div className="detail__cast_screen">
      <div className="screen">
        <h3>Scenes</h3>
        <img src={screen_1} />
        <img src={screen_2} />
        <img src={screen_3} />
      </div>
      <h3>Cast</h3>
      <div className="detail__cast">
        {cast.map((cast) => (
          <div className="cast">
            <div className="cast__img">
              <img
                src={cast.url_small_image}
                alt={cast.name}
                onerror="this.src='https://s.pstatic.net/static/www/img/uit/2019/sp_search.svg';"
              />
            </div>
            <div className="cast__info">
              <span id="castName">{cast.name}</span>
              <span id="castChar">{cast.character_name} 역</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

DetailMovie.propTypes = {
  screen_1: PropTypes.string.isRequired,
  screen_2: PropTypes.string.isRequired,
  screen_3: PropTypes.string.isRequired,
  cast: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
