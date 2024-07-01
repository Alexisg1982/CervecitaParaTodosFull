import React from 'react';
import Image from 'next/image';
import CardCounter from './CardCounter';

const CardComponent = ({ title, description, imageUrl, precio, id }) => {
  return (
    <section style={estilos.card}>
      <div style={estilos.cardContent}>
        <Image src={imageUrl} alt={title} width={250} height={220} />
        <div style={estilos.cardText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div style={estilos.counterContainer}>
        <CardCounter precios={precio} id={id} />
      </div>
    </section>
  );
};

export default CardComponent;

const estilos = {
  card: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
    width: '270px',
    marginBottom: '10px', // Añadir margen inferior para separar las tarjetas
  },
  cardContent: {
    flexGrow: 1,
  },
  cardText: {
    marginTop: '10px', // Separar el texto de la imagen
  },
  counterContainer: {
    marginTop: 'auto',
    paddingTop: '10px', // Separar el contador del contenido superior
  },
};


