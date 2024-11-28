// src/components/layout/ItemsContainer.jsx

import React, { useContext } from "react";
import Item from "./Item";
import { REDESSOCIALES, NAVEGACION, CONTACTANOS } from "./Menus";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "./AuthContextPrueba";

const ItemsContainer = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigationLinks = NAVEGACION(isAuthenticated);

  return (
    <div className="md:flex md:justify-around grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 text-center">
      <div>
        <Item Links={REDESSOCIALES} title="REDES SOCIALES" />
        <div className="flex my-5 gap-4 justify-center">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-5xl" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-5xl" /></a>
        </div>
      </div>
      <Item Links={navigationLinks} title="NAVEGACION" />
      <Item Links={CONTACTANOS} title="CONTACTANOS" />
    </div>
  );
};

export default ItemsContainer;