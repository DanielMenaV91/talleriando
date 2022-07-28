import React, { useState, useEffect } from "react";
import Buttons from "./components/Buttons.jsx";
import Display from "./components/Display.jsx";
import Lista from "./components/Lista.jsx";
import "./style/main.css";
import useLocalStorage from "./hooks/useLocalStorage";
import AppContext from "./hooks/AppContext";

const App = () => {
  const {
    datos,
    agregarNumero,
    borrar,
    borrarTodo,
    computar,
    limpiarHistorico,
  } = useLocalStorage("CALCULADORA_V1", {
    valorAnterior: "",
    valorActual: "",
    tipoOperacion: undefined,
    displayValorAnterior: "",
    displayValorActual: "",
    signos: {
      sumar: "+",
      dividir: "%",
      multiplicar: "x",
      restar: "-",
    },
    toDOList: [],
  });

  return (
    <AppContext.Provider value={datos}>
      <div className="container">
        <div className="calculadora">
          <Display></Display>
          <Buttons
            agregarNumero={agregarNumero}
            borrar={borrar}
            borrarTodo={borrarTodo}
            computar={computar}
          ></Buttons>
        </div>
        <Lista limpiarHistorico={limpiarHistorico}></Lista>
      </div>
    </AppContext.Provider>
  );
};

export default App;
