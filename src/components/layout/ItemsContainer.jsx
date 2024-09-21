import Item from "./Item";
import { REDESSOCIALES, NAVEGACION, CONTACTANOS } from "./Menus";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const ItemsContainer = () => {
  return (
    <div className="md:flex md:justify-around grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 text-center">
      <div>
        <Item Links={REDESSOCIALES} title="REDES SOCIALES" />
         <div className="flex my-5 gap-4 justify-center">
          <a href="#"><FaSquareInstagram className="text-5xl"></FaSquareInstagram></a>
          <a href="#"><FaLinkedin className="text-5xl"></FaLinkedin></a>
          </div>
      </div>
      <Item Links={NAVEGACION} title="NAVEGACION" />
      <Item Links={CONTACTANOS} title="CONTACTANOS" />
    </div>
    
  );
};

export default ItemsContainer;
