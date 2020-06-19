import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { Modal, Select } from 'antd';
import 'antd/dist/antd.css';

// Styled components
import { ModalFormCSS } from './styled';

function ModalForm() {
  const [visible, setVisible] = useState(false);
  const confirmLoading = false;

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <ModalFormCSS />
      <button
        onClick={e => {
          e.preventDefault();
          showModal();
        }}
        type="button"
        id="filtro"
      >
        <FontAwesomeIcon className="iconeFiltro" icon={faFilter} />
      </button>
      <Modal
        visible={visible}
        footer={false}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="modalForm"
        wrapClassName="wrapForm"
      >
        a<button type="submit">Buscar</button>
      </Modal>
    </>
  );
}

export default ModalForm;
