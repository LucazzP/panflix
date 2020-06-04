/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Input from '~/components/unform/Input';
import Textarea from '~/components/unform/Textarea';
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
  const generos = [];

  async function handleSubmit(data, { reset }) {
    const req = api.post('movies', data).then(function(response) {
      if (response.status === 200) {
        toast.success('Filme cadastrado com sucesso!');
        reset();
      }
    });
  }

  async function SetGeneros() {
    const { data } = await api.get('movies');

    data.map(genero => {
      generos.push({ title: genero.name, id: genero.id });
      return genero;
    });
  }

  useEffect(() => {
    SetGeneros();
  }, []);

  return (
    <FormHolder>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        className="flex column alignCenter justifyStart"
        initialData={{ techs: 1 }}
      >
        <div
          style={{ width: '100%' }}
          className="columnsContainer flex row alignStart justifyCenter"
        >
          <FormColumn className="flex column alignStart justifySpaceBtn">
            {/* <label htmlFor="generos">- Gênero:</label>
            <Select name="genero" placeholder="genêro" options={generos}></Select> */}
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
          {/* <FormColumn className="flex column alignStart justifySpaceBtn">
            <label htmlFor="titulo">- Poster:</label>
            <FileInput
              className="upload"
              name="poster"
              id="poster"
              // onChange={posterChange}
              accept="image/*"
              ref={posterRef}
            />
            <label htmlFor="slogan">- Backdrop:</label>
            <FileInput
              className="upload"
              name="backdrop"
              id="backdrop"
              // onChange={backdropChange}
              accept="image/*"
              ref={backdropRef}
            />
          </FormColumn> */}
        </div>
        <button type="submit">Adicionar</button>
      </Form>
    </FormHolder>
  );
};

export default FormContent;
