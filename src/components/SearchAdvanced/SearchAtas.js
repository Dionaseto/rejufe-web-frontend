/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import './SearchAtas.css';
import { useMediaQuery } from '@mui/material/';
import Box from '@mui/material/Box';

function SearchAtas({
  rows,
}) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(rows);
  const matchesFont85 = useMediaQuery('(max-width:680px)');
  const matchesFont90 = useMediaQuery('(max-width:930px)');

  // eslint-disable-next-line no-unused-vars
  let filter = [];
  const filterDescription = rows?.filter(((item) => item.description?.toLowerCase().includes(query)));
  console.log('🚀 ~ file: dashboardComponent.js ~ line 320 ~ filterDescription', rows?.filter(((item) => item.description.toLowerCase().includes(query))));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleData = () => {
    history.push({
      pathname: '/consulta-atas-e-editais',
      state: { data },
    });
    setOpen(false);
  };

  console.log(query);
  const filterType = rows?.filter(((item) => item.type?.includes(type)));
  console.log('🚀 ~ file: dashboardComponent.js ~ line 322 ~ filterType', filterType);
  console.log('🚀 ~ file: dashboardComponent.js ~ line 322 ~ filterType', query);
  useEffect(() => {
    if (query !== '' && type === '') {
      console.log('vida');
      setData(filterDescription);
      setQuery('');
      console.log('🚀 ~ file: SearchAtas.js ~ line 19 ~ data', data);
    }
    if (type !== '' && query === '') {
      console.log('top');
      setData(filterType);
      setType('');
    }
    if (type !== '' && query !== '') {
      console.log('hel');
      filterType?.forEach((obj) => {
        filter = filterDescription?.filter(((item) => item.type.includes(obj.type)));
        setData(filter);
      });
    }
  }, [data]);
  console.log('🚀 ~ file: SearchAtas.js ~ line 88 ~ data', data);

  const buttonFontProps = {
    // eslint-disable-next-line no-nested-ternary
    style: matchesFont85
      ? {
        fontSize: '85%',
        backgroundColor: '#2574A9',
        color: 'white',
        padding: '6px',
      }
      : matchesFont90
        ? {
          fontSize: '90%',
          backgroundColor: '#2574A9',
          color: 'white',
        }
        : {
          fontSize: '100%',
          backgroundColor: '#2574A9',
          color: 'white',
        },
  };

  const body = (
    <Box className="AcceptModal-ContainerModal">
      <div className="AcceptModal-text">
        <div className="AcceptModal-Question">Pesquisa Avançada</div>
      </div>
      <div className="AcceptModal-Buttons">
        <div className="AcceptModal-Bu">

          <label>Descrição:</label>

          <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        </div>
        <div className="AcceptModal-Bu">

          <p> Tipo:</p>

          <select className="EditModal-Input" placeholder="" onChange={(e) => setType(e.target.value)}>
            <option value="ATAS">ATAS</option>
            <option value="EDITAIS">EDITAIS</option>
          </select>
        </div>
        <div className="buttons">
          <div className="AcceptModal-button1">
            <button type="button" className="AcceptModal-ButtonCancel" onClick={handleData}>
              <div className="AcceptModal-align">
                <p>Pesquisa Avançada</p>
              </div>
            </button>
          </div>
          <div className="AcceptModal-button2">
            <button
              className="AcceptModal-ButtonConfirm"
              onClick={handleClose}
              type="button"
            >
              <div className="AcceptModal-align">
                <p>Limpar</p>
              </div>
            </button>
          </div>
          <div className="AcceptModal-button3">
            <button type="button" className="AcceptModal-ButtonCancel" onClick={handleClose}>
              <div className="AcceptModal-align">
                <p>Voltar</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        {...buttonFontProps}
        sx={{
          marginRight: '15px',
          marginLeft: '15px',
        }}
        onClick={handleOpen} // botão para o modal
      >
        Pesquisa Avançada
        {/* TODO Implementar o botão de pesquisa avançada */}
      </Button>
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

export default SearchAtas;
