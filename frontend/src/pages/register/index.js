import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import LogoPanflixBranco from '~/assets/logo/logo-white.png';
import { signUpRequest } from '~/store/modules/auth/actions';

import { LoginContainer, FormHolder, FormContent } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insiria um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <LoginContainer className="flex column alignCenter justifyCenter">
      <FormHolder className="flex column alignCenter justifyCenter">
        <FormContent className="flex column alignCenter justifyCenter">
          <img
            id="logoPanflix"
            src={LogoPanflixBranco}
            alt="Logo Panflix - White"
          />
          <Form
            schema={schema}
            onSubmit={handleSubmit}
            className="flex column alignCenter justifyCenter"
          >
            <Input name="name" type="text" id="name" placeholder="Nome" />
            <Input name="email" type="email" id="email" placeholder="E-mail" />
            <Input
              name="password"
              type="password"
              id="senha"
              placeholder="Senha"
            />
            <button type="submit">Cadastrar</button>
          </Form>
          <span>
            Já possui conta?
            <br />
            <Link to="/login">Faça login</Link>
          </span>
        </FormContent>
      </FormHolder>
    </LoginContainer>
  );
};

export default Login;
