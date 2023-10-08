
import React from "react";
const NewSales = () =>{
    return(
        <div>
          <section className=" shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50">
            <div className="grid-grid-cols-1 md:grid grid-cols-4">
                <li>
                <label>Empresa</label>
                <input className="border" disabled></input>
                </li>
                <li>
                <label>Tipo de Documento</label>
                <input className="border" disabled></input>
                </li>
                <li>
                <label>Nro. de Documento</label>
                <input className="border" disabled></input>
                </li>
                <li>
                <label>Fecha de Emision</label>
                <input className="border" disabled></input>
                </li>
                <li>
                <label>Tipo de Pago</label>
                <select className="border border-gray-400 rounded">
                    <option>EFECTIVO</option>
                    <option>DEPOSITO</option>
                </select>
                </li>
            </div>
            <div>

            </div>
            <div>

            </div>

          </section>
          
            </div>
    )
}
export default NewSales;