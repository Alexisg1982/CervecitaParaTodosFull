import React from 'react'
import Image from 'next/image';

const CardComponent = ({ title, description, imageUrl}) => {
  return (
    <section style={estilos.card}><div className="card">
    <div >
      <Image src={imageUrl} alt={title} width={300} height={200} />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div></section>
  );
};

export default CardComponent;


const estilos = {
  card: {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '300px',
  },
};




