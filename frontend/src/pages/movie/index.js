import React from 'react';
import { useParams } from 'react-router-dom';

// import Banner from '~/components/browse/banner';
import Movie from '~/components/movies/movie';

import { MoviePage } from './styled';

const Browse = () => {
  const { id } = useParams();

  return (
    <MoviePage className="flex column alignStart justifyTop">
      <Movie identifier={id} />
    </MoviePage>
  );
};

export default Browse;
