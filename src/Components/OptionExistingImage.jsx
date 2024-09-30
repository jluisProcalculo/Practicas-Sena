import { useState } from "react";
import CommercialData from "./CommercialData";
import OpenData from "./OpenData";

const OptionExistingImage = () => {
  const options = {
    commercial: "commercial",
    open: "open",
  };
  const [optionExisting, setOptionExisting] = useState(options.commercial);

  const selectOption = (option) => {
    setOptionExisting(option);
  };

  return (
    <div className="optionExisting_container">
      <button
        className="btn_commercial"
        onClick={() => selectOption(options.commercial)}
      >
        Commercial
      </button>
      <button className="btn_open" onClick={() => selectOption(options.open)}>
        Open
      </button>
      {optionExisting == options.commercial ? <CommercialData /> : <OpenData />}
      
    </div>
  );
};

export default OptionExistingImage;
