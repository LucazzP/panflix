import React, { Component } from 'react';
import { Modal } from 'antd';

// Styled components
import { ModalRegistroCSS } from './styled';

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
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <>
        <ModalRegistroCSS />
        <a href="./" id="login">Login</a>
        <button id="register" onClick={this.showModal}>
          Registre-se
        </button>
        <Modal
          visible={true}
          footer={false}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className={"modalRegistro"}          
        >
          <input type="email" id="email"/>
          <input type="password" id="senha"/>
          <button>Login</button>
        </Modal>
      </>
    );
  }
}
