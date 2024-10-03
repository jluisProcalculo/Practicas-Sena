import Search from "../Components/Search";
import { Outlet } from "react-router-dom";
import Explore from "../Routes/Explore";

const ExistingImage = () => {
  return (
    <div className="existingImage_container">
      <Search />
      <Explore />
      <Outlet />
    </div>
  );
};

export default ExistingImage;
