import React, { useState, useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import { CartContext } from '../store/shoping-cart-context';

export default function CardCounter({id, precios }) {

  useEffect(() => {
    console.log(id);
  }, []);
  const { items, addItemToCart, updateItemQuantity } = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  function handleMin(){
    if(counter > 0){
      updateItemQuantity(id, -1);
      setCounter(counter - 1);
    }
    console.log(items)
  }

  function handlePlus(){
    if(counter === 0){
      addItemToCart(id);
      setCounter(counter + 1);
    }
    else{
      updateItemQuantity(id, 1);
      setCounter(counter + 1);
    }
    console.log(items)
  }

  return (
    <div style={estilos.counter}>
      <div style={estilos.buttonContainer}>
        <Button style={estilos.button} onClick={handleMin }>-</Button>
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




