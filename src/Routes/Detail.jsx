import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { skyfiPlatformApiGetArchive } from "../Services/archive";
import DetailExistingImage from "../Components/DetailExistingImage";
import { ContextGlobal } from "../Context/globalContext";

const Detail = () => {
  const params = useParams();
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    dispatch({ type: "TURN_STATE_DETAIL", payload: true }); // Estado de detail a true
    skyfiPlatformApiGetArchive(params.id, dispatch);
  }, []);

  /**
   * Maneja la acción de modificar el estado de Detail a false 
   */
  const handleReturn = () => {
    dispatch({ type: "TURN_STATE_DETAIL", payload: false });
  };

  return (
    <>
      <div className="left_container detail_container">
        <div className="header_detail">
          <div className="icon_preview">
            <Link to={-1} onClick={handleReturn}>
              <img src="/arrow-left-line.svg" alt="" width={24} />
            </Link>
          </div>
          <h3 className="msg_preview">Low Resolution Preview</h3>
        </div>
        <DetailExistingImage image={state.detailImage} />
        <div className="footer_detail">
          <div className="price_footer_detail">
            <p className="text_sizemini">0 km2 price:</p>
            <div className="price_text">
              <span className="price">$0.00</span>
              <span className="text_sizemini">pre-tax</span>
            </div>
          </div>
          <button className="btn_footer_detail">
            <img src="/shopping-cart.svg" alt="" width={16} />
            <p>ADD TO CART</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
