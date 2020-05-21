/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { Movie } from './styled';

import { store } from '~/store';

const MovieComponent = props => {
  const { signed } = store.getState().auth;
  // const [starColor, setStarColor] = useState([]);
  const { movie } = props;

  function getMovieImage(width, imageURL) {
    const image = `https://image.tmdb.org/t/p/w${width}${imageURL}`;
    return image;
  }

  function goToMovie(id) {
    history.push(`/movie/${id}`);
  }

  async function favoriteItem(id) {
    const { data } = await api.post(`movies/${id}/favorite`);

    if (data.message.includes('unfavorited')) {
      toast.success('Filme desfavoritado!');
    } else if (data.message.includes('favorited')) {
      toast.success('Filme favoritado!');
    }
  }

  const ShowFavorite = () => {
    if (signed) {
      return (
        <FontAwesomeIcon
          onClick={() => favoriteItem(movie.id)}
          // style={{ color: starColor }}
          icon={faStar}
        />
      );
    }
    return false;
  };

  const poster = getMovieImage(200, movie.poster_path);

  return (
    <Movie key={movie.id} className="flex column alignCenter justifyCenter">
      <div className="image flex column alignCenter justifyCenter">
        <img
          onClick={() => goToMovie(movie.id)}
          src={poster}
          alt={movie.title}
        />
      </div>
      <div className="title flex row alignTop justifyTop">
        <h3>{movie.title}</h3>
        <ShowFavorite />
      </div>
    </Movie>
  );
};

export default MovieComponent;

MovieComponent.propTypes = {
  movie: PropTypes.node,
};

MovieComponent.defaultProps = {
  movie: null,
};
