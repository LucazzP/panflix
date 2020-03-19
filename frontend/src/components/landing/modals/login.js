import React, { Component } from 'react';
import { Modal } from 'antd';

// Styled components
import { ModalCSS } from './styled';
import "@fortawesome/fontawesome-free/js/all"

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
    return (
      <>
        <ModalCSS />
        <button id="login" onClick={this.showModal}><i class="fas fa-sign-in-alt"></i></button>
        <Modal
          visible={visible}
          footer={false}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className={"modalRegistro"}          
        >
          <p>Login</p>
          <input type="email" id="email" placeholder="E-mail"/>
          <input type="password" id="senha" placeholder="Senha"/>
          <button>Login</button>
        </Modal>
      </>
    );
  }
}
