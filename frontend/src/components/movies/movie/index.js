import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';
import apiMovieDB from '~/services/apiMovieDB';

import { MovieInfo } from './styled';

import { store } from '~/store';

const Movie = props => {
  const [info, setInfo] = useState({});
  const [videoKey, setVideoKey] = useState(null);
  const { signed } = store.getState().auth;

  function getMovieImage(width, imageURL) {
    if (imageURL == null) {
      const image = `https://via.placeholder.com/720x420`;
      return image;
    }
    const image = `https://image.tmdb.org/t/p/w${width}${imageURL}`;
    return image;
  }

  const Video = () => {
    if (!signed) {
      const poster = getMovieImage(500, info.backdrop_path);
      return (
        <div className="image">
          <img src={poster} alt="" />
          <h2>
            Você não está logado, portanto
            <br />
            não pode assistir o filme
          </h2>
        </div>
      );
    }

    if (videoKey != null) {
      return (
        <iframe
          title={videoKey}
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return (
      <iframe
        title="rB11hfPdtWk"
        src="https://www.youtube.com/embed/rB11hfPdtWk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  async function loadMovie() {
    await api.get(`movies/${props.identifier}`).then(async function(response) {
      const { data } = response;
      setInfo(data);
      await apiMovieDB
        .get(
          `/movie/${data.id_tmdb}/videos?api_key=607fcf182e5277e9564a6d3980326159&language=pt-BR`
        )
        .then(function(res) {
          console.log(res.data);
          if (res.data.results.length > 0) {
            setVideoKey(res.data.results[0].key);
          }
        });
    });
  }

  useEffect(() => {
    loadMovie();
  }, []);

  return (
    <MovieInfo className="flex column alignStart justifyStart">
      <div className="videoHolder">
        <Video />
      </div>
      <div className="Info flex column alignStart justifyStart">
        <h1>{info.title}</h1>
        <h2>{info.tagline}</h2>
        <p>{info.overview}</p>
        <p>Popularidade: {info.popularity}</p>
      </div>
    </MovieInfo>
  );
};

export default Movie;

Movie.propTypes = {
  identifier: PropTypes.string,
};

Movie.defaultProps = {
  identifier: null,
};
