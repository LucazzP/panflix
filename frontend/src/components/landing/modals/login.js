import React, { Component } from 'react';
import { Modal } from 'antd';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// Styled components
import { ModalCSS } from './styled';
import "@fortawesome/fontawesome-free/js/all"

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insiria um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
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

  handleSend = () => {
    
  }

  render() {
    const { visible, confirmLoading } = this.state;

    function handleSubmit(data) {
      console.table(data);
    }

    return (
      <>
        <ModalCSS />
        <button id="login" onClick={this.showModal}><i className="fas fa-sign-in-alt"></i></button>
        <Modal
          visible={visible}
          footer={false}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className={"modalRegistro"}          
        >
          <Form schema={schema} onSubmit={handleSubmit} className="flex column alignCenter justifyCenter">
            <p>Login</p>
            <Input name="email" type="email" id="email" placeholder="E-mail"/>
            <Input name="password" type="password" id="senha" placeholder="Senha"/>
            <button type="submit">Login</button>
          </Form>
        </Modal>
      </>
    );
  }
}
