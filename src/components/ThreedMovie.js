import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function ThreedMovie({ id, year, title, summary, poster, genres, background, desc, runtime, youtube, rating }) {
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
      <div className="threedMovie movie">
        <img src={poster} alt={title} title={title} />
        <div className="caption">
          <span>{title}</span>
          <span>⭐️{rating}/10.0</span>
        </div>
      </div>
    </Link>
  );
}

ThreedMovie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  background: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  youtube: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ThreedMovie;
