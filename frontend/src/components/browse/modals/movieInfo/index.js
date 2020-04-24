import React, { useState } from 'react';
import { Modal } from 'antd';

// Styled components
import { ModalCSS } from './styled';

const ModalMovieInfo = props => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <ModalCSS />
      <Modal
        visible={visible}
        footer={false}
        onCancel={handleCancel}
        className="modalRegistro"
      >
        <h3>props.title</h3>
        <p>props.desc</p>
      </Modal>
    </>
  );
};

export default ModalMovieInfo;
