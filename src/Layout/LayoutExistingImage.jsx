import Search from "../Components/Search";
import { Outlet } from "react-router-dom";
import Explore from "../Routes/Explore";

const LayoutExistingImage = () => {
  return (
    <div className="left_container">
      <Search />
      <Explore />
      <Outlet />
    </div>
  );
};

export default LayoutExistingImage;
