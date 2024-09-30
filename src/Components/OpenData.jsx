import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { skyfiPlatformApiArchives } from "../Services/archive";
import { ContextGlobal } from "../Context/globalContext";

const OpenData = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    skyfiPlatformApiArchives(dispatch);
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
      </div>
    </>
  );
};

export default OpenData;
