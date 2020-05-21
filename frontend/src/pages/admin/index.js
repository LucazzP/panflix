import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import history from '~/services/history';

import { AdminContainer, Actions, Action } from './styled';

const Admin = () => {
  return (
    <AdminContainer className="flex column alignStart justifyStart">
      <h1>Admin Dashboard</h1>
      <h2>Ações:</h2>
      <Actions className="flex row alignCenter justifyStart">
        <Action
          className="flex column alignCenter justifyCenter"
          onClick={e => {
            e.preventDefault();
            history.push('/admin/addMovie');
          }}
        >
          <FontAwesomeIcon className="icone" icon={faPlus} />
          <p>Adicionar Filme</p>
        </Action>
      </Actions>
    </AdminContainer>
  );
};

export default Admin;
