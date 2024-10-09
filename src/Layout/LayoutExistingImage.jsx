import Search from "../Components/Search";
import { Outlet } from "react-router-dom";
import Explore from "../Routes/Explore";
import { useContext } from "react";
import { ContextGlobal } from "../Context/globalContext";

const LayoutExistingImage = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="left_container">
      {/* en Detail se modifica stateDetail con el fin de que no aparezca Search y Explore */}
      {state.stateDetail == false ? (
        <>
          <Search />
          <Explore />
        </>
      ) : null}
      <Outlet />
    </div>
  );
};

export default LayoutExistingImage;
