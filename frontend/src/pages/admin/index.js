import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrash,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import history from '~/services/history';
import api from '~/services/api';

import { AdminContainer, Actions, Action, Listagem, Movie } from './styled';

const Admin = () => {
  const [categories, setCategories] = useState([]);

  async function recentMovies() {
    const { data } = await api.get('movies');

    setCategories(data);
  }

  useEffect(() => {
    recentMovies();
  }, []);

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
      <h2 style={{ marginTop: '30px' }}>Filmes:</h2>
      <Listagem className="flex column alignStart justifyStart">
        <ul className="flex column alignStart justifyStart">
          {categories.map(category =>
            category.movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  className="flex row alignCenter justifyStart"
                >
                  <div className="info flex row alignCenter justifyStart">
                    <p>{movie.id}</p>
                    <p className="divisor">|</p>
                    <p>{movie.title}</p>
                  </div>
                  <div className="action flex row alignCenter justifyStart">
                    <p className="divisor">|</p>
                    <FontAwesomeIcon className="icone" icon={faPencilAlt} />
                    <FontAwesomeIcon className="icone" icon={faTrash} />
                  </div>
                </Movie>
              );
            })
          )}
        </ul>
      </Listagem>
    </AdminContainer>
  );
};

export default Admin;
