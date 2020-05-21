/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input, Textarea, FileInput } from '@rocketseat/unform';

import apiImgur from '~/services/apiImgur';
import { signInRequest } from '~/store/modules/auth/actions';

import { FormHolder, FormColumn } from './styled';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('O título é obrigatório')
    .max(50, 'O título não pode ter mais de 50 caracteres'),
  tagline: Yup.string()
    .required('O slogan é obrigatório')
    .max(60, 'O slogan não pode ter mais de 60 caracteres'),
  overview: Yup.string()
    .required('A descrição é obrigatório')
    .max(120, 'A descrição não pode ter mais de 120 caracteres'),
  popularity: Yup.string()
    .required('A popularidade é obrigatória')
    .max(15, 'A popularidade não pode ter mais de 120 caracteres'),
});

const FormContent = () => {
  const [posterState, setPosterState] = useState(null);
  const [backdropState, setBackdropState] = useState(null);
  const posterRef = useRef(null);
  const backdropRef = useRef(null);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function posterChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    setPosterState(data);
  }

  function backdropChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    setBackdropState(data);
  }

  async function handleSubmit({ title, tagline, overview, popularity }) {
    const poster = {
      image: posterState,
      album: '',
    };

    const backdrop = {
      image: backdropState,
      album: '',
    };

    await apiImgur.post('/upload', poster);
    await apiImgur.post('/upload', backdrop);
    dispatch(signInRequest(title, tagline, overview, popularity));
  }

  return (
    <FormHolder>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        className="flex column alignCenter justifyStart"
      >
        <div
          style={{ width: '100%' }}
          className="columnsContainer flex row alignStart justifyCenter"
        >
          <FormColumn className="flex column alignStart justifySpaceBtn">
            <label htmlFor="titulo">- Título:</label>
            <Input
              name="title"
              type="text"
              className="text"
              id="title"
              placeholder="Digite aqui"
              maxLength="50"
            />
            <label htmlFor="slogan">- Slogan:</label>
            <Input
              name="tagline"
              type="text"
              className="text"
              id="tagline"
              placeholder="Digite aqui"
              maxLength="60"
            />
            <label htmlFor="descricao">- Descrição:</label>
            <Textarea
              name="overview"
              type="text"
              className="text"
              id="overview"
              placeholder="Digite aqui"
              maxLength="120"
            />
            <label htmlFor="popularidade">- Popularidade:</label>
            <Input
              name="popularity"
              type="text"
              className="text"
              id="popularity"
              placeholder="Digite aqui"
            />
          </FormColumn>
          <FormColumn className="flex column alignStart justifySpaceBtn">
            <label htmlFor="titulo">- Poster:</label>
            <FileInput
              className="upload"
              name="poster"
              id="poster"
              onChange={posterChange}
              accept="image/*"
              ref={posterRef}
            />
            <label htmlFor="slogan">- Backdrop:</label>
            <FileInput
              className="upload"
              name="backdrop"
              id="backdrop"
              onChange={backdropChange}
              accept="image/*"
              ref={backdropRef}
            />
          </FormColumn>
        </div>
        <button type="submit">{loading ? 'Carregando...' : 'Adicionar'}</button>
      </Form>
    </FormHolder>
  );
};

export default FormContent;
