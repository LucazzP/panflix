/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Movie } from './styled';

import { store } from '~/store';

const MovieComponent = props => {
  const { signed } = store.getState().auth;
  const { movie, favorite, goToMovie } = props;

  function getMovieImage(width, imageURL) {
    if (imageURL == null) {
      const image = `https://via.placeholder.com/200x300`;
      return image;
    }
    const image = `https://image.tmdb.org/t/p/w${width}${imageURL}`;
    return image;
  }

  const ShowFavorite = () => {
    if (signed) {
      return (
        <FontAwesomeIcon
          style={{ color: '#fff' }}
          onClick={() => favorite(movie.id)}
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
  movie: PropTypes.object,
  favorite: PropTypes.func,
  goToMovie: PropTypes.func,
};

MovieComponent.defaultProps = {
  movie: null,
  favorite: null,
  goToMovie: null,
};
