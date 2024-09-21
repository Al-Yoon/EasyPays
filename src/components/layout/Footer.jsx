import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#38bdf8] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center" 
        >
          <h1 className="text-white md:text-1xl sm:text-1xl text-1xl md:py-6">Optimiza la gestión de tus tickets</h1>
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 text-center pb-10 text-gray-400"
      >
        <span>©EASY PAYS BUSINESS.</span>
        <span>Terminos · Politica de Privacidad</span>
      </div>
    </footer>
  );
};

export default Footer;
