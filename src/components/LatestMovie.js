import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function LatestMovie({ id, year, title, summary, poster, genres, background, desc, runtime, youtube, rating }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
          background,
          desc,
          runtime,
          youtube,
          rating,
        },
      }}
    >
      <div className="latestMovie movie">
        <img src={poster} alt={title} title={title} />
        <div class="caption">
          <span>{title}</span>
          <span>⭐️{rating}/10.0</span>
        </div>
      </div>
    </Link>
  );
}

LatestMovie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LatestMovie;
