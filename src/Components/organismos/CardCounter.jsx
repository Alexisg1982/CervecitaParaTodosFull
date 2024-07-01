import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function CardCounter({ precios }) {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  };

  return (
    <div style={estilos.counter}>
      <div style={estilos.buttonContainer}>
        <Button style={estilos.button} onClick={handleMinus}>-</Button>
        <Button style={estilos.button} onClick={handlePlus}>+</Button>
        <p style={estilos.count}>{counter}</p>
      </div>
      <div>
        <p style={estilos.precio}>$ {precios * counter}</p>
      </div>
    </div>
  );
}

const estilos = {
  counter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: '8px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },
  button: {
    minWidth: '30px',
    minHeight: '30px',
    fontSize: '18px',
    flex: '0 0 auto',
    border: '2px solid #57ACD0',
    borderRadius: '10px',
  },
  count: {
    margin: '0 7px',
    fontSize: '18px',
    textAlign: 'center',
  },
  precio: {
    fontSize: '18px',
    margin: '0 7px',
    fontWeight: 'bold',
    color: '#ffffff' ,
    textAlign: 'center',
  },
};




