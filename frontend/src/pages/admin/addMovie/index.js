/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { AdicionarFilmeContainer } from './styled';

import FormContent from '~/components/admin/addMovie';

const AddMovie = () => {
  return (
    <AdicionarFilmeContainer>
      <h1 className="title">Adicionar filme</h1>
      <FormContent />
    </AdicionarFilmeContainer>
  );
};

export default AddMovie;
