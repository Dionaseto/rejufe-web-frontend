import React, { useState } from 'react';
import './MenuLateral.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  { buttonName: 'Home' },
  { buttonName: 'Editais' },
  { buttonName: 'Atas' },
  { buttonName: 'Associados' },
  { buttonName: 'Ações Adm' },
  { buttonName: 'Ações Jurídicas' },
  { buttonName: 'Prestação de Contas' },
  { buttonName: 'Aniversariantes' },
  { buttonName: 'Comunicados' },
  { buttonName: 'Informativos' },
  { buttonName: 'Enquetes' },
  { buttonName: 'Fale Conosco' },
];

const theme = createTheme({
  palette: {
    secondary: {
      main: '#264A6F',
    },
  },
});

function MenuLateral() {
  const [selectedButton, setSelectedButton] = useState('');

  const defineBackgroundColor = (buttonType) => (selectedButton === buttonType
    ? 'menuSideClickButton'
    : 'menuSideGrupButton');

  return (
    <Box>
      <div className="menuSidepage">
        <div className="menuSideContainer">
          <ThemeProvider theme={theme}>
            <ButtonGroup
              className="menuSideAll"
              size="large"
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
              color="secondary"
            >

              {buttons.map((button) => (
                <Button key={`${button.buttonName}`} className={defineBackgroundColor(button.buttonName)} onClick={() => setSelectedButton(button.buttonName)}>{button.buttonName}</Button>
              ))}

            </ButtonGroup>
          </ThemeProvider>
        </div>
      </div>
    </Box>
  );
}

export default MenuLateral;
