import Item from "./Item";
import { REDESSOCIALES, NAVEGACION, CONTACTANOS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="md:flex md:justify-around grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 text-center">
      <Item Links={REDESSOCIALES} title="REDES SOCIALES" />
      <Item Links={NAVEGACION} title="NAVEGACION" />
      <Item Links={CONTACTANOS} title="CONTACTANOS" />
    </div>
  );
};

export default ItemsContainer;
