import React from "react";
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom"; 
const PurchaseOrder = () =>{
    return (
        <div className="bg-gray-100 h-full">
        <section className="w-100 p-6">
          <div className="flex  justify-between mb-5">
          <h1 className="font-medium text-2xl">Orden de Compra</h1>
          <p className="text-gray-500">OrdenCompra/<NavLink to="/" exact className="cursor-pointer text-sky-500 font-medium">Inicio</NavLink></p>
          </div>
          <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white p-2 rounded w-56">
          <NavLink to="/crearOrdenCompra" exact className="flex"><FaIcons.FaPlusCircle className="mx-2 m-1"/>Crear Orden de Compra</NavLink>
          </div>
        </section>
          <section className=" shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50">
               <div className="flex justify-between p-3">
               <div>
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Rango de Fechas</p>
                   <input type="date" className="border border-gray-300 rounded m-2 p-1"></input>-
                   <input type="date" className="border border-gray-300 rounded m-2 p-1"></input>
                </div>
                <div>
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                    <input className="border border-gray-300 rounded m-2 p-1"></input>
                </div>
                <div>
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro de Estados</p>
                    <div className="border border-gray-300 p-1 m-2 mt-4 rounded">
                    <input type="radio" className="mx-2" name="FilterStates"/><label className="text-green-700">Facturados</label> 
                    <input type="radio" className="mx-2" name="FilterStates"/><label className="text-yellow-500">Pendientes</label> 
                    <input type="radio" className="mx-2" name="FilterStates"/><label className="text-red-700">Eliminados</label> 
                    </div>
                    
                </div>
               <div className="w-100 m-6">
               <button className="flex font-medium p-2 mt-3 px-6 w-100 cursor-pointer rounded bg-blue-500 hover:bg-blue-600 text-white text-center"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</button>
               </div>
               </div>
              <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
                    <table className="border w-full">
                       <thead className="flex p-2 justify-between  bg-slate-400">
                        <td className="font-medium">Nro.</td>
                        <td className="font-medium">Emision</td>
                        <td className="font-medium">Proveedor</td>
                        <td className="font-medium">Precio Total</td>
                        <td className="font-medium">Estado</td>
                        <td className="font-medium"></td>
                       </thead>
                       <tbody>
                        filtro de datos de c#
                       </tbody>
                    </table>    
              </div>

          </section>
          
      </div>
    );
}
export default PurchaseOrder;