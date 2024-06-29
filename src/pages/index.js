import React from "react";
import Image from "next/image";
/// STYLES
import GlobalStyles from "@/styles/GlobalStyles";

const Index = () => {
  return (
    <>
      <Image
        src="/assets/LogoBirrin.png"
        width={144}
        height={50}
        alt="Picture of the author"
      />
      <h1 style={GlobalStyles.paragraph}>Cervesita para todos</h1>
    </>
  );
};

export default Index;
