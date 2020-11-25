import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function PopularMovie({ id, year, title, summary, poster, genres, background, desc, runtime, youtube, rating }) {
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
      <div className="popularMovie movie">
        <img src={poster} alt={title} title={title} />
        <div class="caption">
          <span>{title}</span>
          <span>⭐️{rating}/10.0</span>
        </div>
        {/* <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <div className="movie__summary_scroll">
            <p className="movie__summary">{summary.slice(0, 120)}...</p>
          </div>
        </div> */}
      </div>
    </Link>
  );
}

PopularMovie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PopularMovie;
