import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@material-ui/core/styles';
import './modalEnquetes.css';
import { createTheme, ThemeProvider } from '@mui/material';
import FormInputs from '../formsInputs/registerQuizz';

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
    width: '40%',
    backgroundColor: 'white',
    maxHeight: '95%',
    borderRadius: '8px',
    boxShadow: theme.palette.color4,
    padding: '1% 1%',
    // overflowY: 'scroll',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (max-width:900px)']: {
      width: '60%',
    },
    ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
    },
    ['@media (max-width:1150px)']: { // eslint-disable-line no-useless-computed-key
    },
  },

}));

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '5%',
          height: '50px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: '80%',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#264A6F',
          fontWeight: '500',
          fontSize: '30',
        },
      },
    },
  },
});

// let alternative = 2;

toast.configure();

export default function ModalEnquete({ setNewQuizz }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <ThemeProvider theme={theme}>
      <div style={modalStyle} className={classes.paper}>
        <div className="container-modal-quizz">
          <div className="exit-modal-quizz">
            <button
              className="close-modal-quizz"
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
          <FormInputs setNewQuizz={setNewQuizz} />
        </div>
      </div>
    </ThemeProvider>
  );

  return (
    <div>
      <button
        className="create-quizz-button"
        type="button"
        onClick={handleOpen}
      >
        Criar nova enquete
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
