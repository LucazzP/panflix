/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTrash,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { AdminContainer, Actions, Action, Listagem, Movie } from './styled';

const Admin = () => {
  const [categories, setCategories] = useState([]);

  async function recentMovies() {
    const { data } = await api.get('movies');

    setCategories(data);
  }

  async function deleteMovie(id) {
    await api.delete(`movies/${id}`).then(function(response) {
      const { status } = response;
      if (status === 200) {
        toast.success(`Filme de id ${id} excluido com sucesso!`);
      }
    });
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
                    <FontAwesomeIcon
                      onClick={function(e) {
                        e.preventDefault();
                        history.push(`/admin/editmovie/${movie.id}`);
                      }}
                      className="icone edit"
                      icon={faPencilAlt}
                    />
                    <FontAwesomeIcon
                      onClick={function(e) {
                        e.preventDefault();
                        deleteMovie(movie.id);
                      }}
                      className="icone trash"
                      icon={faTrash}
                    />
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
