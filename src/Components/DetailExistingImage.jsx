import { useRef } from "react";
import { Link, useParams } from "react-router-dom";

const DetailExistingImage = () => {
  const containerRef = useRef(null); // Referencia al contenedor con scroll
  const params = useParams();

  return (
    <div className="left_container">
      <div className="preview_container">
        <div className="icon_preview">
          <Link to={-1}>
            <img src="../../public/arrow-left-line.svg" alt="" width={24} />
          </Link>
        </div>
        <h3 className="msg_preview">Low Resolution Preview</h3>
      </div>
      <div className="optionExisting_container">
        <div className="title_detail">
          <p>Image Details</p>
          <div className="icon_filter">
            {/* ToDo: button opciones Copy Link, Share en redes sociales */}
            <img src="../../public/clarity-share-line.svg" alt="" width={24} />
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            repellat sit eligendi nemo voluptatibus, laudantium amet voluptatum
            laborum, blanditiis assumenda ratione temporibus ut omnis similique
            consequatur nesciunt, nam rem delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            repellat sit eligendi nemo voluptatibus, laudantium amet voluptatum
            laborum, blanditiis assumenda ratione temporibus ut omnis similique
            consequatur nesciunt, nam rem delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            repellat sit eligendi nemo voluptatibus, laudantium amet voluptatum
            laborum, blanditiis assumenda ratione temporibus ut omnis similique
            consequatur nesciunt, nam rem delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            repellat sit eligendi nemo voluptatibus, laudantium amet voluptatum
            laborum, blanditiis assumenda ratione temporibus ut omnis similique
            consequatur nesciunt, nam rem delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            repellat sit eligendi nemo voluptatibus, laudantium amet voluptatum
            laborum, blanditiis assumenda ratione temporibus ut omnis similique
            consequatur nesciunt, nam rem delectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailExistingImage;
