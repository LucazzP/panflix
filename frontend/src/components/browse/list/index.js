/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { MovieContainer, CategoryContainer, Movies } from './styled';
import MovieComponent from './movie';

import { store } from '~/store';

const Browse = () => {
  const { signed } = store.getState().auth;

  const [categories, setCategories] = useState([]);
  const [recent, setRecent] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const favoriteContainer = useRef(null);

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

    loadFavorites();
  }

  useEffect(() => {
    loadFavorites();
    recentMovies();
    loadMovies();
  }, []);

  const ShowFavorites = () => {
    if (signed && favorites.length > 0) {
      return (
        <CategoryContainer
          ref={favoriteContainer}
          className="flex column alignStart justifyCenter"
        >
          <h2>Favoritos ></h2>
          <Movies className="flex row alignCenter justifyStart">
            {favorites.map(movie => {
              return (
                <MovieComponent
                  key={movie.id}
                  movie={movie}
                  favorite={favoriteItem}
                  goToMovie={goToMovie}
                  id_tmdb={movie.id_tmdb}
                />
              );
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
            return (
              <MovieComponent
                key={movie.id}
                movie={movie}
                favorite={favoriteItem}
                goToMovie={goToMovie}
                id_tmdb={movie.id_tmdb}
              />
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
            {category.movies.slice(0, 8).map(movie => {
              return (
                <MovieComponent
                  key={movie.id}
                  movie={movie}
                  favorite={favoriteItem}
                  goToMovie={goToMovie}
                  id_tmdb={movie.id_tmdb}
                />
              );
            })}
          </Movies>
        </CategoryContainer>
      ))}
    </MovieContainer>
  );
};

export default Browse;
