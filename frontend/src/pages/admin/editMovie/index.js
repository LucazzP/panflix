/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { EditarFilmeContainer } from './styled';

import FormContent from '~/components/admin/editMovie';

const AddMovie = () => {
  const { id } = useParams();
  if (id) {
    return (
      <EditarFilmeContainer>
        <h1 className="title">Editar filme</h1>
        <FormContent id={id} />
      </EditarFilmeContainer>
    );
  }
  return <Redirect to="/admin" />;
};

export default AddMovie;
