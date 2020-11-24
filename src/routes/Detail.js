import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import DetailMovie from '../components/DetailMovie';

import './Detail.css';

class Detail extends React.Component {
  state = {
    isLoading: true,
    detailMovie: [],
  };

  // 여기서부터 다시

  getDetailMovie = async () => {
    const { location } = this.props;
    const {
      data: {
        data: { movie },
      },
    } = await axios.get(
      `https://yts-proxy.nomadcoders1.now.sh/movie_details.json?movie_id=${location.state.id}&with_images=true&with_cast=true`
    );
    this.setState({ detailMovie: movie, isLoading: false });
  };

  // 여기까지

  componentDidMount() {
    const { location, history } = this.props;
    this.getDetailMovie();
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { detailMovie, isLoading } = this.state;
    const { location } = this.props;

    if (location.state && isLoading === false) {
      return (
        <div className="detail__container">
          <img src={location.state.background} id="background" />
          <div className="detail__left">
            <img src={location.state.poster} />
          </div>
          <div className="detail__right">
            <div className="detail__title">
              <h2>{location.state.title}</h2>
              <div className="detail__info">
                <span>{location.state.year} 개봉</span>
                <span>{location.state.runtime}분</span>
                {location.state.genres.map((genre, index) => (
                  <b key={index} className="genres__genre">
                    {genre}
                  </b>
                ))}
                <span>
                  <i class="fas fa-star"></i>
                  {location.state.rating}/10.0
                </span>
              </div>
              <div className="detail__desc">
                <p>{location.state.desc}</p>
              </div>
              <div className="detail__yt">
                <ReactPlayer url={`https://youtu.be/${location.state.youtube}`} controls playbackRate={2} width="80%" />
              </div>
              <div className="detail__movie">
                <DetailMovie
                  id={detailMovie.id}
                  cast={detailMovie.cast}
                  screen_1={detailMovie.medium_screenshot_image1}
                  screen_2={detailMovie.medium_screenshot_image2}
                  screen_3={detailMovie.medium_screenshot_image3}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
