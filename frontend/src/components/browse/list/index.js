/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import { MovieContainer, CategoryContainer, Movies } from './styled';
import MovieComponent from './movie';

import { store } from '~/store';

const Browse = () => {
  const { signed } = store.getState().auth;

  const [categories, setCategories] = useState([]);
  const [recent, setRecent] = useState([]);
  const [favorites, setFavorites] = useState([]);

  async function loadMovies() {
    const { data } = await api.get('movies');

    setCategories(data);
  }

  async function recentMovies() {
    const { data } = await api.get('movies/orderByCreatedDate');

    setRecent(data);
  }

  async function loadFavorites() {
    const { data } = await api.get('movies/favorites');

    setFavorites(data);
  }

  useEffect(() => {
    loadFavorites();
    recentMovies();
    loadMovies();
  }, []);

  const ShowFavorites = () => {
    if (signed && favorites.length > 0) {
      return (
        <CategoryContainer className="flex column alignStart justifyCenter">
          <h2>Favoritos ></h2>
          <Movies className="flex row alignCenter justifyStart">
            {favorites.map(movie => {
              return <MovieComponent movie={movie} />;
            })}
          </Movies>
        </CategoryContainer>
      );
    }
    return false;
  };

  return (
    <MovieContainer className="flex column alignStart justifyTop">
      <ShowFavorites />
      <CategoryContainer className="flex column alignStart justifyCenter">
        <h2>Adicionados Recentemente ></h2>
        <Movies className="flex row alignCenter justifyStart">
          {recent.slice(0, 8).map(movie => {
            return <MovieComponent movie={movie} />;
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
            {category.movies.slice(0, 8).map(movie => {
              return <MovieComponent movie={movie} />;
            })}
          </Movies>
        </CategoryContainer>
      ))}
    </MovieContainer>
  );
};

export default Browse;
