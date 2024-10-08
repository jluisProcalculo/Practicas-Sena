import { useContext } from "react";
import { routes, routesExplore } from "../Utils/routes";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/globalContext";

/**
 * Componente que muestra los botones de Commercial y Open para navegar entre ellos
 */
const Explore = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <>
      <div className="left_container">
        <Link
          to={`${routes.explore}/${routesExplore.commercial}/aoi=${state.aoi}`}
        >
          <button className="btn_commercial">Commercial</button>
        </Link>
        <Link to={`${routes.explore}/${routesExplore.open}/aoi=${state.aoi}`}>
          <button className="btn_open">Open</button>
        </Link>
      </div>
    </>
  );
};

export default Explore;
