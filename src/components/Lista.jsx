import React, { useContext } from "react";
import AppContext from "../hooks/AppContext";

const Lista = ({ limpiarHistorico }) => {
  const { toDOList } = useContext(AppContext);
  return (
    <>
      <div className="lista">
        <h1>Listado de resultados</h1>
        <button
          onClick={() => {
            limpiarHistorico();
          }}
        >
          Limpiar Historio
        </button>
        <ul>
          {toDOList.map((item, index) => (
            <li key={"esta es la respuesta" + index}>
              {item.operacion} <br /> {item.resultado}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Lista;
