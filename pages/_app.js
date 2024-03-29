import React from "react";
import "@/styles/globals.css";
import Navbar from "./Navbar/index";
import Footer from "./footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
