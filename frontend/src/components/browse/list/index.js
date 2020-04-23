/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import imageApi from '~/services/imageTheMovieDB';

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

  for (let i = 0; i <= categories.length; i++) {
    for (let h = 0; h <= 1; h++) {}
  }

  return (
    <MovieContainer className="flex column alignStart justifyTop">
      <CategoryContainer className="flex column alignStart justifyCenter">
        <h2>Categoria</h2>
        <Movies>
          <Movie className="flex column alignCenter justifyCenter">
            {/* <img src={movies[0].image} alt={movies[0].original_title} />
            <h3>{movies[0].original_title}</h3> */}
          </Movie>
        </Movies>
      </CategoryContainer>
    </MovieContainer>
  );
};

export default Browse;
