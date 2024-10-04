import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { skyfiPlatformApiGetArchive } from "../Services/archive";
import DetailExistingImage from "../Components/DetailExistingImage";
import { ContextGlobal } from "../Context/globalContext";

const Detail = () => {
  const params = useParams();
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    skyfiPlatformApiGetArchive(params.id, dispatch);
  }, []);

  return (
    <>
      <div className="left_container detail_container">
        <div className="header_detail">
          <div className="icon_preview">
            <Link to={-1}>
              <img src="../../public/arrow-left-line.svg" alt="" width={24} />
            </Link>
          </div>
          <h3 className="msg_preview">Low Resolution Preview</h3>
        </div>
        <DetailExistingImage image={state.detailImage} />
        <div className="footer_detail">
            ADD TO CART
        </div>
      </div>
    </>
  );
};

export default Detail;
