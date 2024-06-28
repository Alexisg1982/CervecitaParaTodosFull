import React from 'react'
import Navigation from './components/Navigation'
import CardProduct from '../components/CardProduct';

const Home= () => {
  return (
    <>
      <Navigation/>
    </>
  )
}

const HomeScreen = ({ cards }) => {
  return (
    <div>
      <h1>My Cards</h1>
      <div className="card-grid">
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // obtener api o bd


  return {
    props: {
      cards,
    },
  };
}

export default HomeScreen;