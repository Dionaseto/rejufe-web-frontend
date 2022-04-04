import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import * as managerService from '../../../services/manager/managerService';
import './modalExcluir.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '30%',
    backgroundColor: 'white',
    border: '2px solid #609694',
    borderRadius: '8px',
    boxShadow: theme.palette.color4,
    padding: '1% 1%',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:1424px)']: {
      width: '38%',
    },
    ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
      width: '45%',
    },
    ['@media (max-width:850px)']: { // eslint-disable-line no-useless-computed-key
      width: '55%',
    },
    ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
    },
  },

}));

toast.configure();

export default function ModalAdminExclude({ setTypeChanged, id }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const changeUserType = async () => {
    try {
      await managerService.changeUserTypeById({
        type: 'usuario',
      }, id);
      setTypeChanged(true);
      toast('Tipo do usuário atualizado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    } catch (error) {
      toast.error('Não foi possível alterar o tipo do usuário!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="exit-user-module-exclude">
        <button
          className="close-user-module-exclude"
          type="button"
          onClick={() => {
            handleClose();
          }}
        >
          <CloseIcon
            size={30}
            sx={[
              {
                color: '#264A6F',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#264A6F',
                  borderRadius: '5px',
                },
              },
            ]}
          />
        </button>
      </div>
      <div className="container-exclude-user-module">
        <div className="title-user-module-exclude">
          <h1>Confirmação</h1>
        </div>
        <div className="content-user-module-exclude">
          <h1>Você tem certeza que deseja atualizar esse administrador para o tipo usuário?</h1>
        </div>
        <div className="user-module-exclude-buttons">
          <button
            className="confirm-user-module-exclude"
            type="button"
            onClick={() => {
              changeUserType();
              handleClose();
            }}
          >
            Confirmar
          </button>
          <button
            className="cancel-user-module-exclude"
            type="button"
            onClick={() => {
              handleClose();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="modal-open-button-user-module-exclude">
      <button
        type="button"
        onClick={handleOpen}
      >
        <DeleteForeverRoundedIcon />
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