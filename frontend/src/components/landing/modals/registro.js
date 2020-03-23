import React, { Component } from 'react';
import { Modal } from 'antd';
import * as Yup from 'yup';

import api from "../../../services/api";

import { Form, Input } from '@rocketseat/unform';

// Styled components
import { ModalCSS, Registro, AfterRegistro } from './styled';
import "@fortawesome/fontawesome-free/js/all"

const schema = Yup.object().shape({
  name: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insiria um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória')
});

export default class ModalRegistro extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    [].map.call(document.querySelectorAll('input'), function(obj) {
      obj.value = "";
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    
    function handleSubmit(data) {
      console.log(data);
    }

    return (
      <>
        <ModalCSS />
        <button onClick={this.showModal} id="register"><i className="fas fa-user-plus"></i></button>
        <Modal
          visible={visible}
          footer={false}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className={"modalRegistro"}          
        >
          <Registro id="registro" className="flex column alignCenter justifyStart">
            <Form schema={schema} onSubmit={handleSubmit} className="flex column alignCenter justifyCenter">
              <p>Insira seus dados e se registre</p>
              <Input type="text" id="name" name="name" placeholder="Nome" />
              <Input type="email" id="email" name="email" placeholder="E-mail"/>
              <Input type="password" id="password" name="password" placeholder="Senha"/>
              <button type="submit">Registrar</button>
            </Form>
          </Registro>
          <AfterRegistro id="afterRegistro" className="flex column alignCenter justifyCenter none">
            <p>Registro efetuado com sucesso!</p>
            <p className="info">Agora, para prosseguir com o acesso à plataforma, enviamos um e-mail para você ativar sua conta.</p>
          </AfterRegistro>
        </Modal>
      </>
    );
  }
}
