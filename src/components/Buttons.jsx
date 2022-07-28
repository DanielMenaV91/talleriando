import React from "react";

const Buttons = ({ agregarNumero, borrar, borrarTodo, computar }) => {
  return (
    <>
      <button
        className="col-2"
        onClick={() => {
          borrarTodo();
        }}
      >
        C
      </button>
      <button
        onClick={() => {
          borrar();
        }}
      >
        &larr;
      </button>
      <button
        className="operador"
        id="dividir"
        onClick={(e) => {
          computar(e.target.id);
        }}
      >
        %
      </button>
      <button
        className="numero"
        id="7"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        7
      </button>
      <button
        className="numero"
        id="8"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        8
      </button>
      <button
        className="numero"
        id="9"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        9
      </button>
      <button
        className="operador"
        id="multiplicar"
        onClick={(e) => {
          computar(e.target.id);
        }}
      >
        x
      </button>
      <button
        className="numero"
        id="4"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        4
      </button>
      <button
        className="numero"
        id="5"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        5
      </button>
      <button
        className="numero"
        id="6"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        6
      </button>
      <button
        className="operador"
        id="restar"
        onClick={(e) => {
          computar(e.target.id);
        }}
      >
        -
      </button>
      <button
        className="numero"
        id="1"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        1
      </button>
      <button
        className="numero"
        id="2"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        2
      </button>
      <button
        className="numero"
        id="3"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        3
      </button>
      <button
        className="operador"
        id="sumar"
        onClick={(e) => {
          computar(e.target.id);
        }}
      >
        +
      </button>
      <button
        className="col-2 numero"
        id="0"
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        0
      </button>
      <button
        className="numero"
        id="."
        onClick={(e) => {
          agregarNumero(e.target.id);
        }}
      >
        .
      </button>
      <button
        className="operador"
        id="igual"
        onClick={(e) => {
          computar(e.target.id);
        }}
      >
        =
      </button>
    </>
  );
};

export default Buttons;
