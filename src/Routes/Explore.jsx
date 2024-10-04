import { useContext } from "react";
import CommercialData from "../Components/CommercialData";
import { routes, routesExplore } from "../Utils/routes";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Context/globalContext";

const Explore = () => {
  const { state } = useContext(ContextGlobal); // ToDo: la idea es que al dar click en Existing Image se borre el AOI

  return (
    <div className="left_container">
      <Link to={`${routes.explore}/${routesExplore.commercial}`}>
        <button className="btn_commercial">Commercial</button>
      </Link>
      <Link to={`${routes.explore}/${routesExplore.open}`}>
        <button className="btn_open">Open</button>
      </Link>
      {!state.imageOpen && <CommercialData />}
    </div>
  );
};

export default Explore;
