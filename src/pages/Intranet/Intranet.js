import React, { useState } from 'react';
import MenuLateral from '../MenuLateral';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import ResultadoQuizzes from '../ResultadoQuizzes/ResultadoQuizzes';
import './Intranet.css';
import LogoPretoBranco from '../../images/LogoPretoBranco.png';

function Intranet() {
  const [selectedButton, setSelectedButton] = useState('');
  const myStyle = {
    backgroundImage: `url(${LogoPretoBranco})`,
  };
  return (
    <div style={myStyle}>
      <div className="intranet-main-container">
        <div className="intranet-side-menu">
          <MenuLateral setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
        </div>
        {selectedButton === 'Enquetes' ? (
          <div className="intranet-dashboad-quizzes">
            <ResultadoQuizzes />
          </div>
        ) : (
          <div />
        )}
      </div>
      <div>
        <BottomMenu />
      </div>
    </div>
  );
}

export default Intranet;
