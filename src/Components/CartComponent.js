//Mapeo Props de cards//
import axios from "axios";
import React, { useContext, useEffect } from 'react'
import ProductCard from '../Components/organismos/ProductCard';
import { CardContext } from "../../Context/CardContext";

 
export default function CartComponent() {

const { cardsArray } = useContext(CardContext)

  return (
    <div style={{backgroundColor: '#000000', display: 'flex', justifyContent: "center", flexDirection: "column", width:"100%"}}>
      <div style={estilos.card}>
        {cardsArray.map((card) => (
          <ProductCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            precio={card.precio}
           
          />
        ))}
      </div>
    </div>
  );
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
