import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { MovieInfo } from './styled';

const Movie = props => {
  const [info, setInfo] = useState({});

  function getMovieImage(width, imageURL) {
    const image = `https://image.tmdb.org/t/p/w${width}${imageURL}`;
    return image;
  }

  useEffect(() => {
    async function loadMovie() {
      const { data } = await api.get(`movies/${props.identifier}`);
      console.log(data);

      setInfo(data);
    }
    loadMovie();
  }, []);

  const poster = getMovieImage(500, info.backdrop_path);

  return (
    <MovieInfo className="flex column alignStart justifyStart">
      <div className="Image flex column alignStart justifyStart">
        <img src={poster} alt="" />
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
