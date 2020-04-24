/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import history from '~/services/history';

import { MovieContainer, CategoryContainer, Movies, Movie } from './styled';

const Browse = () => {
  const [categories, setCategories] = useState([]);

  function getMovieImage(width, imageURL) {
    const image = `https://image.tmdb.org/t/p/w${width}${imageURL}`;
    return image;
  }

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get('movies');

      setCategories(data);
    }

    loadMovies();
  }, []);

  function goToMovie(id) {
    history.push(`/movie/${id}`);
  }

  return (
    <MovieContainer className="flex column alignStart justifyTop">
      {categories.map(category => (
        <CategoryContainer
          key={category.id}
          className="flex column alignStart justifyCenter"
        >
          <h2>{`${category.name} >`}</h2>
          <Movies className="flex row alignCenter justifyStart">
            {category.movies.slice(0, 8).map(movie => {
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
