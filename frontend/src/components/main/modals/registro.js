import React, { useState } from 'react';
import { Modal } from 'antd';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// Styled components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalCSS, Registro, AfterRegistro } from './styled';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insiria um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

const ModalRegistro = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = data => {
    console.tron.log(data);
    // const res = api.post('/sessions', data);
  };

  return (
    <>
      <ModalCSS />
      <button type="button" onClick={showModal} id="register">
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
      <Modal
        visible={visible}
        footer={false}
        onCancel={handleCancel}
        className="modalRegistro"
      >
        <Registro
          id="registro"
          className="flex column alignCenter justifyStart"
        >
          <Form
            schema={schema}
            onSubmit={handleSubmit}
            className="flex column alignCenter justifyCenter"
          >
            <p>Insira seus dados e se registre</p>
            <Input type="text" id="name" name="name" placeholder="Nome" />
            <Input type="email" id="email" name="email" placeholder="E-mail" />
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
            />
            <button type="submit">Registrar</button>
          </Form>
        </Registro>
        <AfterRegistro
          id="afterRegistro"
          className="flex column alignCenter justifyCenter none"
        >
          <p>Registro efetuado com sucesso!</p>
          <p className="info">
            Agora, para prosseguir com o acesso à plataforma, enviamos um e-mail
            para você ativar sua conta.
          </p>
        </AfterRegistro>
      </Modal>
    </>
  );
};

export default ModalRegistro;
