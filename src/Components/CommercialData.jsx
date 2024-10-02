import { useContext, useEffect } from "react";
import Card from "./Card";
import { skyfiPlatformApiArchives } from "../Services/archive";
import { ContextGlobal } from "../Context/globalContext";
import { Link } from "react-router-dom";
import { filters } from "../Utils/filtersArchiveData";

const CommercialData = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const filterCommercial = {
      resolutions: filters.resolutions,
      productTypes: filters.productTypes,
      providers: filters.providers,
      OpenData: filters.openData, // ToDo: cambiar a "false" cuando se tenga acceso a datos Commercial
    };
    skyfiPlatformApiArchives(dispatch, filterCommercial);
  }, []);

  return (
    <div>
      <div className="filter_container">
        <p>Images already captured</p>
        <div className="icon_filter">
          <button>
            <img src="../../public/mage--filter.svg" alt="" width={24} />
          </button>
        </div>
      </div>
      <div className="container_cards">
        {state.imageOpen.map((image) => (
          <Card key={image.archiveId} image={image} />
        ))}
        <div className="link_taskingorder">
          <p>Not finding what you're looking for?</p>
          <Link to={"https://google.com"}>ORDER NEW IMAGE</Link>
        </div>
      </div>
    </div>
  );
};

export default CommercialData;
