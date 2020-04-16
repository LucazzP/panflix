import React, { useState } from 'react';
import { Modal } from 'antd';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// Styled components
import { ModalCSS } from './styled';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insiria um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
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
  };

  return (
    <>
      <ModalCSS />
      <button type="button" id="login" onClick={showModal}>
        <FontAwesomeIcon icon={faSignInAlt} />
      </button>
      <Modal
        visible={visible}
        footer={false}
        onCancel={handleCancel}
        className="modalRegistro"
      >
        <Form
          schema={schema}
          onSubmit={handleSubmit}
          className="flex column alignCenter justifyCenter"
        >
          <p>Login</p>
          <Input name="email" type="email" id="email" placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            id="senha"
            placeholder="Senha"
          />
          <button type="submit">Login</button>
        </Form>
      </Modal>
    </>
  );
};

export default ModalRegistro;
