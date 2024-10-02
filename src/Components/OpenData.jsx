import { useContext, useEffect } from "react";
import Card from "./Card";
import { skyfiPlatformApiArchives } from "../Services/archive";
import { ContextGlobal } from "../Context/globalContext";
import { Link } from "react-router-dom";
import { filters } from "../Utils/filtersArchiveData";

const OpenData = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const filterOpen = {
      resolutions: filters.resolutionsOpen,
      productTypes: filters.productTypesOpen,
      providers: filters.providers,
      openData: filters.openData
    };
    skyfiPlatformApiArchives(dispatch, filterOpen);
  }, []);

  return (
    <>
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
    </>
  );
};

export default OpenData;
