import React, { useEffect } from "react";
import GlobalStyles from "@/styles/globals";
import Image from "next/image";
import CardProducts from "@/Components/organismos/CardProducts";
import CartContextProvider from "../Components/store/shoping-cart-context.jsx";


const Index = () => {

  return (
    <CartContextProvider>
      <Image
        src="/assets/LogoBirrin.png"
        width={144}
        height={50}
        alt="Picture of the author"
      />
      <h1 style={[GlobalStyles.title]}>Cervesita para todos </h1>
      <CardProducts></CardProducts>
      </CartContextProvider>
  );

};



export default Index;
