import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center" 
        >
          <span className="text-white">Cambiemos ahora manera de gestionar tus tickets</span>
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-60 text-center pt-2 pl-10 text-gray-400 text-sm pb-8"
      >
        <span>©EASY PAYS BUSINESS.</span>
        <span>Terminos · Politica de Privacidad</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
