import React, { useEffect } from 'react'
import CardProduct from "./CardProduct.jsx";
import {cardsArray} from "./arrayCards.js";

export default function CardProducts() {

  useEffect(() => {
    console.log(cardsArray);
  }, []);

  return (
    <div style={estilos.card}>
    {cardsArray.map((card) => (
      <CardProduct
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        imageUrl={card.imageUrl}
        precio={card.precio}
        // onAddToCart={onAddToCart}
      ></CardProduct>
    ))}
  </div>
  )
}

const estilos = {
  card: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#00000',
  },
};
