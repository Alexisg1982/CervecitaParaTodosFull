import React, { useEffect } from "react";
import GlobalStyles from "@/styles/globals";
import Image from "next/image";
import CardProduct from '../Components/organismos/CardProduct.jsx';
import cardsArray from '../Components/organismos/arrayCards.js';
// STYLES

const Index = () => {

  useEffect(() => {
    console.log(cardsArray);
  },[]);
  return (
    <>
      <Image
        src="/assets/LogoBirrin.png"
        width={144}
        height={50}
        alt="Picture of the author"
      />
      <h1 style={[GlobalStyles.title]}>Cervesita para todos </h1>
      {cardsArray.map((card) => (
        <CardProduct 
        key={card.id} 
        title={card.title} 
        description={card.description}
        imageUrl={card.imageUrl}>
        </CardProduct>))}
    </>
  );
};

export default Index;
