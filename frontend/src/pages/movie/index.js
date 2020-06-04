import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

// import Banner from '~/components/browse/banner';
import Movie from '~/components/movies/movie';

import { MoviePage } from './styled';

const Browse = () => {
  const { id } = useParams();
  if (id) {
    return (
      <MoviePage className="flex column alignStart justifyTop">
        <Movie identifier={id} />
      </MoviePage>
    );
  }
  return <Redirect to="/browse" />;
};

export default Browse;
