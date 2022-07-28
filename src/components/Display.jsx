import React, { useContext } from "react";
import AppContext from "../hooks/AppContext";

const Display = () => {
  const { displayValorAnterior, displayValorActual } = useContext(AppContext);

  return (
    <div className="display">
      <div id="valor-anterior"> {displayValorAnterior}</div>
      <div id="valor-actual">{displayValorActual}</div>
    </div>
  );
};

export default Display;
