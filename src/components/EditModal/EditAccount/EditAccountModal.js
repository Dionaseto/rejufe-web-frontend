/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import { toast } from 'react-toastify';
import * as managerService from '../../../services/manager/managerService';
import './EditAccountModal.css';
import EditAccountInputs from './EditAccountInputs';

toast.configure();

export default function EditAccount({
  id, account, archive1Id, setUse, page,
}) {
  const [dados, setDados] = useState(account);
  const formData = new FormData();
  const titles = [
    { label: 'Título:', field: 'input' },
    { label: 'Data:', field: 'date' },
    { label: 'Descrição:', field: 'input' },
  ];

  async function handleSubmit() {
    Object.entries(dados).forEach((dado) => {
      if (dado[0] === 'archive_1' || dado[0] === 'archive_2') {
        dado[1] = dado[1] ? dado[1]?.file : '';
        formData.append(dado[0], dado[1]);
      } else {
        formData.append(dado[0], dado[1]);
      }
    });

    try {
      await managerService.updateAccount(id, formData);
      toast.success('Dados editados!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      setUse(true);
    } catch (error) {
      toast.error('Não foi possível editar prestação de conta', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setDados(account);
  }, [page]);

  const body = (
    <Box className="EditModal-model-container">
      <div role="button" tabIndex={0} className="EditModal-model-cancel" onClick={handleClose}>
        <CancelIcon />
      </div>
      <div className="EditModal-model-title">
        <p>Editar dados</p>
      </div>
      <EditAccountInputs
        id={id}
        dados={dados}
        setDados={setDados}
        archive1Id={archive1Id}
        titles={titles}
      />
      <button
        className="EditModal-model-buttonConfirm"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          handleClose();
        }}
        type="button"
      >
        Confirmar
      </button>
    </Box>
  );
  return (
    <div>
      <button type="button" className="EditModal-model-editGroup" onClick={handleOpen}>
        <EditIcon style={{ size: '10', color: '#2F5C88', cursor: 'pointer' }} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
