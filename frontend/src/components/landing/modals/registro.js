import React, { Component } from 'react';
import { Modal } from 'antd';

// Styled components
import { ModalCSS, Registro, AfterRegistro } from './styled';
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

  render() {
    const { visible, confirmLoading } = this.state;
    
    return (
      <>
        <ModalCSS />
        <button onClick={this.showModal} id="register"><i class="fas fa-user-plus"></i></button>
        <Modal
          visible={visible}
          footer={false}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className={"modalRegistro"}          
        >
          <Registro id="registro" className="flex column alignCenter justifyStart">
            <p>Insira seus dados e se registre</p>
            <input type="text" id="nome" placeholder="Nome" />
            <input type="email" id="email" placeholder="E-mail"/>
            <input type="password" id="senha" placeholder="Senha"/>
            <input type="password" id="confirmarSenha" placeholder="Confirme sua senha"/>
            <button>Registrar</button>
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
