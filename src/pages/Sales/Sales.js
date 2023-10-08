import { useState } from 'react';
import React  from "react";
import NewSales from './NewSales';
import Issued from './Issued'
const Sales = () =>{
  const [activeButton, setActiveButton] = useState("nuevoMovimiento");

        return (
          <div className="flex-1 h-full bg-gray-100">
            <section className="flex justify-between p-4">
              <h1 className="font-medium text-2xl">Ventas</h1>
              <div>
                <button
                  to="nuevoMovimiento"
                  className={`p-2 mx-2 hover:text-blue-500 rounded text-gray-500 text-center ${
                    activeButton === "nuevaVenta" ? "bg-blue-500 hover:bg-blue-600 text-white hover:text-slate-50" : ""
                  }`}
                  onClick={() => setActiveButton("nuevoMovimiento")}
                >
                  Nueva Venta
                </button>
                <button
                  to="/emitidas"
                  className={`p-2 hover:text-blue-500 rounded text-gray-500 text-center ${
                    activeButton === "emitidas" ? "bg-blue-500 hover:bg-blue-600 text-white hover:text-slate-50" : ""
                  }`}
                  onClick={() => setActiveButton("emitidas")}
                >
                  Emitidas
                </button>
              </div>
            </section>
            {activeButton === "nuevoMovimiento" ? <NewSales/> : <Issued/>}
          </div>
        );
    }
export default Sales;