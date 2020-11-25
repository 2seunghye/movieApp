import React from 'react';
import axios from 'axios';
import LatestMovie from '../components/LatestMovie';
import PopularMovie from '../components/PopularMovie';
import ThreedMovie from '../components/ThreedMovie';

import './Home.css';
// import PropTypes from 'prop-types';

class Home extends React.Component {
  state = {
    latestLoading: true,
    popularLoading: true,
    threedLoading: true,
    latestMovies: [],
    popularMovies: [],
    threedMovies: [],
  };
  getLatestMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=year&limit=38');
    this.setState({ latestMovies: movies, latestLoading: false });
  };

  getPopularMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating&limit=36');
    this.setState({ popularMovies: movies, popularLoading: false });
  };

  getThreedMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?quality=3D&limit=30');
    this.setState({ threedMovies: movies, threedLoading: false });
  };

  componentDidMount() {
    this.getLatestMovies();
    this.getPopularMovies();
    this.getThreedMovies();
  }

  render() {
    const { latestLoading, popularLoading, threedLoading, latestMovies, popularMovies, threedMovies } = this.state;
    return (
      <section className="container">
        {latestLoading && popularLoading && threedLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="Movie_container">
            <h3>3D Movie</h3>
            <div className="threedMovies movieCard">
              {threedMovies.map((movie) => (
                <ThreedMovie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.large_cover_image}
                  genres={movie.genres}
                  background={movie.background_image_original}
                  desc={movie.description_full}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  youtube={movie.yt_trailer_code}
                />
              ))}
            </div>
            <h3>Latest Movie</h3>
            <div className="latestMovies movieCard">
              {latestMovies.map((movie) => (
                <LatestMovie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.large_cover_image}
                  genres={movie.genres}
                  background={movie.background_image_original}
                  desc={movie.description_full}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  youtube={movie.yt_trailer_code}
                />
              ))}
            </div>
            <h3>Popular Movie</h3>
            <div className="popularMovies movieCard">
              {popularMovies.map((movie) => (
                <PopularMovie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.large_cover_image}
                  genres={movie.genres}
                  background={movie.background_image_original}
                  desc={movie.description_full}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  youtube={movie.yt_trailer_code}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
