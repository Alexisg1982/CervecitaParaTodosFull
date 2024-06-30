import React from "react";
import Image from "next/image";
/// STYLES
import GlobalStyles from "@/styles/GlobalStyles";
import ButtonComponent from "@/components/atomos/Button";
import { Default } from "@/styles";

const Index = () => {
  return (
    <>
      <div style={[]}>
        
        <Image
          src="/assets/LogoBirrin.png"
          width={144}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <h1 style={GlobalStyles.paragraph}>Cervesita para todos</h1>
      <ButtonComponent
        title="Comprar"
        size="small"
        variant="contained"
        textColor="white"
        rounded={false}
        backgroundColor="black"
        sx={{width: "100px" }}
      />
    </>
  );
};

export default Index;
