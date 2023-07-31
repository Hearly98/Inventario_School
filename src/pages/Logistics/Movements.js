import React, { useState } from "react";
import NewMovement from "./NewMovement";
import MovementsList from "./MovementsList"

const Movements = () => {
  const [activeButton, setActiveButton] = useState("nuevoMovimiento");

  return (
    <div className="flex-1 h-full bg-gray-100">
      <section className="flex justify-between p-4">
        <h1 className="font-medium text-2xl">Almacén</h1>
        <div>
          <button
            to="/nuevoMovimiento"
            className={`p-2 mx-2 hover:text-blue-500 rounded text-gray-500 text-center ${
              activeButton === "nuevoMovimiento" ? "bg-blue-500 hover:bg-blue-600 text-white hover:text-slate-50" : ""
            }`}
            onClick={() => setActiveButton("nuevoMovimiento")}
          >
            Nuevo Movimiento
          </button>
          <button
            to="/listaDeMovimientos"
            className={`p-2 hover:text-blue-500 rounded text-gray-500 text-center ${
              activeButton === "movimientos" ? "bg-blue-500 hover:bg-blue-600 text-white hover:text-slate-50" : ""
            }`}
            onClick={() => setActiveButton("movimientos")}
          >
            Movimientos
          </button>
        </div>
      </section>
      {activeButton === "nuevoMovimiento" ? <NewMovement /> : <MovementsList />}
    </div>
  );
};

export default Movements;
