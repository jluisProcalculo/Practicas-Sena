import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes, routesExplore } from "../Utils/routes";
import { ContextGlobal } from "../Context/globalContext";

const Navbar = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div>
      {state.aoi !== "" ? (
        <Link
          to={`${routes.explore}/${routesExplore.commercial}/aoi=${state.aoi}`}
        >
          <button>Explore</button>
        </Link>
      ) : (
        <Link to={`${routes.explore}`}>
          <button>Explore</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
