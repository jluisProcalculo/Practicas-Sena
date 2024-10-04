import { Routes, Route } from "react-router-dom";
import { routes, routesExplore } from "./Utils/routes";
import LayoutNavbar from "./Layout/LayoutNavbar";
import Home from "./Routes/Home";
import DetailExistingImage from "./Components/DetailExistingImage";
import ExistingImage from "./Layout/LayoutExistingImage";
import CommercialData from "./Components/CommercialData";
import OpenData from "./Components/OpenData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutNavbar />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.explore} element={<ExistingImage />}>
              <Route path={routesExplore.commercial} element={<CommercialData />} />
              <Route path={routesExplore.open} element={<OpenData />} />
          </Route>
          <Route
            path={`${routesExplore.detail}/:id`}
            element={<DetailExistingImage />}
          />
          <Route
            path={routes.notFound}
            element={<h1>Error 404 - Page not Found</h1>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
