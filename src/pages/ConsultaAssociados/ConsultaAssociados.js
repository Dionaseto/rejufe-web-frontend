/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './ConsultaAssociados.css';
import * as managerService from '../../services/manager/managerService';
import 'react-toastify/dist/ReactToastify.css';
import TableComponent from '../../components/ConsultaAssociados/ConsultAssociate';
import getAllAssociatesForConsult from '../../components/getAllAssociatesForConsult/getAllAssociatesForConsult';

const titles = [
  'Ficha',
  'Nome',
  'Celular',
  'Status',
  'Lotação',
  'Atuação',
  'Email',
];

function ConsultaAssociados() {
  const [associates, setAllAssociates] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    getAllAssociatesForConsult(setId, setAllAssociates);
  }, []);

  return (
    <div>
      <h1 className="titleConsultAssociate"> Associados Ativos </h1>
      <div className="container-administration">
        <TableComponent id={id} rows={associates} titles={titles} search />
      </div>
    </div>
  );
}

export default ConsultaAssociados;
