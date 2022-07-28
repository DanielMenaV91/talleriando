import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [datos, setDatos] = useState(initialValue);
  useEffect(() => {
    try {
      const localStorageItems = localStorage.getItem(itemName);
      let parsedItem = initialValue;

      if (localStorageItems) {
        parsedItem = JSON.parse(localStorageItems);
      } else {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
      }
      setDatos(parsedItem);
    } catch (error) {
      setDatos(initialValue);
    }
  }, []);

  const agregarNumero = (numero) => {
    if (numero == "." && datos.valorActual.includes(".")) return;
    const newNumero = datos.valorActual + numero;
    setDatos({
      ...datos,
      valorActual: newNumero,
      displayValorActual: newNumero,
      displayValorAnterior: `${datos.valorAnterior} ${
        datos.signos[datos.tipoOperacion] || ""
      }`,
    });
  };

  const borrar = () => {
    let eliminar = datos.valorActual.toString().slice(0, -1);
    setDatos({
      ...datos,
      valorActual: eliminar,
      displayValorActual: eliminar,
      displayValorAnterior: datos.valorAnterior,
    });
  };

  const borrarTodo = () => {
    const newDatos = {
      ...datos,
      valorActual: "",
      valorAnterior: "",
      tipoOperacion: undefined,
      displayValorActual: "",
      displayValorAnterior: "",
    };
    localStorage.setItem(itemName, JSON.stringify(newDatos));
    setDatos(newDatos);
  };

  const limpiarHistorico = () => {
    const newDatos = {
      ...datos,
      toDOList: [],
    };
    localStorage.setItem(itemName, JSON.stringify(newDatos));
    setDatos(newDatos);
  };

  const operaciones = {
    sumar: (numero1, numero2) => {
      return numero1 + numero2;
    },

    restar: (numero1, numero2) => {
      return numero1 - numero2;
    },

    dividir: (numero1, numero2) => {
      return numero1 / numero2;
    },

    multiplicar: (numero1, numero2) => {
      return numero1 * numero2;
    },
    igual: (numero1, numero2) => {
      //Otro daño de erick
      return numero1;
    },
  };

  const computar = (tipo) => {
    erickMeDanoLoQueHice(tipo);
  };

  const erickMeDanoLoQueHice = (tipo) => {
    const nuevosDatos = { ...datos };
    const valorAnterior = parseFloat(nuevosDatos.valorAnterior);
    const valorActual = parseFloat(nuevosDatos.valorActual);

    if (!isNaN(valorActual) && !isNaN(valorAnterior)) {
      nuevosDatos.valorActual = operaciones[nuevosDatos.tipoOperacion](
        valorAnterior,
        valorActual
      );
      const newValorAnterior =
        nuevosDatos.valorActual || nuevosDatos.valorAnterior;
      const newValorActual = "";
      const { toDOList } = datos;
      if (nuevosDatos.signos[datos.tipoOperacion]) {
        const operacion = `${valorAnterior} ${
          nuevosDatos.signos[datos.tipoOperacion]
        } ${valorActual}`;
        toDOList.push({ operacion, resultado: newValorAnterior });
      }
      setDatos({
        ...datos,
        tipoOperacion: tipo,
        valorAnterior: newValorAnterior,
        valorActual: newValorActual,
        displayValorActual: newValorActual,
        displayValorAnterior: `${newValorAnterior} ${
          nuevosDatos.signos[tipo] || ""
        }`,
        toDOList,
      });
      localStorage.setItem(itemName, JSON.stringify(datos));
    } else {
      const newValorAnterior =
        nuevosDatos.valorActual || nuevosDatos.valorAnterior;
      const newValorActual = "";
      setDatos({
        ...datos,
        tipoOperacion: tipo,
        valorAnterior: newValorAnterior,
        valorActual: newValorActual,
        displayValorActual: newValorActual,
        displayValorAnterior: `${newValorAnterior} ${
          nuevosDatos.signos[tipo] || ""
        }`,
      });
    }
  };

  return {
    datos,
    agregarNumero,
    borrar,
    borrarTodo,
    computar,
    limpiarHistorico,
  };
}

export default useLocalStorage;
