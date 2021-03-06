import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import LogoPanflixBranco from '~/assets/logo/logo-white.png';
import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/unform/Input';
import { LoginContainer, FormHolder, FormContent } from './styled';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insiria um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
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
            <Input name="email" type="email" id="email" placeholder="E-mail" />
            <Input
              name="password"
              type="password"
              id="senha"
              placeholder="Senha"
            />
            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
          </Form>
          <span>
            Ainda não possui sua conta?
            <br />
            <Link to="/register">Cadastre-se</Link>
          </span>
        </FormContent>
      </FormHolder>
    </LoginContainer>
  );
};

export default Login;
