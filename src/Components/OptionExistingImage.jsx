import { useContext, useRef, useState } from "react";
import CommercialData from "./CommercialData";
import OpenData from "./OpenData";
import { continueCatalogArchives } from "../Services/archive";
import { ContextGlobal } from "../Context/globalContext";

const OptionExistingImage = () => {
  const options = {
    commercial: "commercial",
    open: "open",
  };
  const [optionExisting, setOptionExisting] = useState(options.commercial);
  const { state, dispatch } = useContext(ContextGlobal);
  const containerRef = useRef(null); // Referencia al contenedor con scroll

  /**
   * Actualiza el estado de la opción seleccionada entre "Commercial" y "Open".
   *
   * @param {string} option - La opción seleccionada, puede ser "Commercial" o "Open".
   * @method setOptionExisting - Actualiza el estado del componente con la opción seleccionada.
   *
   * Paso a paso:
   * 1. Se recibe el parámetro "option", que contiene el valor seleccionado.
   * 2. Se llama a "setOptionExisting(option)" para actualizar el estado con la opción elegida.
   */
  const selectOption = (option) => {
    setOptionExisting(option);
  };

  /**
   * Detecta si el scroll ha llegado al final del contenedor.
   *
   * @method containerRef.current - Referencia al contenedor cuyo scroll está siendo monitoreado.
   * @method scrollTop - La cantidad de scroll que se ha hecho desde la parte superior.
   * @method clientHeight - La altura visible del contenedor.
   * @method scrollHeight - La altura total del contenido dentro del contenedor.
   *
   * Paso a paso:
   * 1. Se obtiene la referencia del contenedor usando "containerRef.current".
   * 2. Se verifica si el scroll ha alcanzado el final comparando "scrollTop + clientHeight" con "scrollHeight - 5".
   * 3. Si hay más páginas disponibles (state.nextPage no es null), se llama a "continueCatalogArchives" para cargar la siguiente página.
   */
  const handleScroll = () => {
    const cont = containerRef.current;
    if (cont.scrollTop + cont.clientHeight >= cont.scrollHeight - 5) {
      state.nextPage !== null &&
        continueCatalogArchives(state.nextPage, dispatch);
    }
  };

  return (
    <div
      className="optionExisting_container"
      ref={containerRef}
      onScroll={handleScroll} // Detecta el evento de scroll
    >
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
