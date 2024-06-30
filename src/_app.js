import React from "react";
import "@/styles/index";
import '@/styles/mediaQueries.css';



export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Component {...pageProps} />;
    </div>
  );
}
