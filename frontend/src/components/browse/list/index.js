/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import history from '~/services/history';

import { MovieContainer, CategoryContainer, Movies, Movie } from './styled';

import { store } from '~/store';

const Browse = () => {
  const { signed } = store.getState().auth;

  const [categories, setCategories] = useState([]);
  const [recent, setRecent] = useState([]);

  function getMovieImage(width, imageURL) {
    const image = `https://image.tmdb.org/t/p/w${width}${imageURL}`;
    return image;
  }

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get('movies');

      setCategories(data);
    }

    async function recentMovies() {
      const { data } = await api.get('movies/orderByCreatedDate');

      setRecent(data);
    }

    recentMovies();
    console.log(recent);
    loadMovies();
  }, []);

  function goToMovie(id) {
    history.push(`/movie/${id}`);
  }

  return (
    <MovieContainer className="flex column alignStart justifyTop">
      <CategoryContainer className="flex column alignStart justifyCenter">
        <h2>Adicionados Recentemente ></h2>
        <Movies className="flex row alignCenter justifyStart">
          {recent.map(movie => {
            const poster = getMovieImage(200, movie.poster_path);
            return (
              <Movie
                key={movie.id}
                onClick={() => goToMovie(movie.id)}
                className="flex column alignCenter justifyCenter"
              >
                <div className="image flex column alignCenter justifyCenter">
                  <img src={poster} alt={movie.title} />
                </div>
                <div className="title flex column alignCenter justifyTop">
                  <h3>{movie.title}</h3>
                </div>
              </Movie>
            );
          })}
        </Movies>
      </CategoryContainer>
      {categories.map(category => (
        <CategoryContainer
          key={category.id}
          className="flex column alignStart justifyCenter"
        >
          <h2>{`${category.name} >`}</h2>
          <Movies className="flex row alignCenter justifyStart">
            {category.movies.slice(0, 15).map(movie => {
              const poster = getMovieImage(200, movie.poster_path);
              return (
                <Movie
                  key={movie.id}
                  onClick={() => goToMovie(movie.id)}
                  className="flex column alignCenter justifyCenter"
                >
                  <div className="image flex column alignCenter justifyCenter">
                    <img src={poster} alt={movie.title} />
                  </div>
                  <div className="title flex column alignCenter justifyTop">
                    <h3>{movie.title}</h3>
                  </div>
                </Movie>
              );
            })}
          </Movies>
        </CategoryContainer>
      ))}
    </MovieContainer>
  );
};

export default Browse;
