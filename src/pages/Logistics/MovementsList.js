import React from "react";
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom";
const NewMovement = () =>{
    return(
        <div>
        <section className="w-100 p-6">
          <div className="flex justify-between">
          <h1 className="font-medium text-2xl">Movimientos de Almacén</h1>
          </div>        
          </section>
          <section className=" shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50">
               <div className="grid grid-cols-1 md:grid-cols-4 justify-around p-3">
               <div className="flex flex-col">
                    <div>
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Rango de Fechas</p>
                    <input type="date" className="border border-gray-300 rounded m-2 p-1"></input>-
                    <input type="date" className="border border-gray-300 rounded m-2 p-1"></input>
                    </div>
                </div>
                <div className="flex-flex-col">
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                    <input className="border border-gray-300 rounded m-2 w-96 p-1"></input>
                </div>
                <div className="flex-flex-col">
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro de Estados</p>
                    <div className="border border-gray-300 p-1 m-2 mt-4 rounded">
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-green-700">Ingreso</label> 
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-yellow-500">Salida</label> 
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-red-700">Anulados</label> 
                    </div>
                    
                </div>
               <div className="w-100 m-6">
               <button className="flex font-medium p-2 mt-3 px-6 w-100 cursor-pointer rounded bg-blue-500 hover:bg-blue-600 text-white text-center"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</button>
               </div>
               </div>
              <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
                    <table className="border w-full">
                       <thead className="flex p-2 justify-between  bg-slate-400">
                        <td className="flex-1 font-medium">Almacen Origen</td>
                        <td className="flex-1 font-medium">Documento</td>
                        <td className="flex-1 font-medium">Fecha Operación</td>
                        <td className="flex-1 font-medium">Tipo de Movimiento</td>
                        <td className="flex-1 font-medium">Responsable</td>
                        <td className="flex-1 font-medium"></td>
                       </thead>
                       <tbody>
                        <tr className="flex p-2 justify-between">
                        <td className="flex-1 font-medium">ALMACEN 1</td>
                        <td className="flex-1 font-medium">NM-123-00001111</td>
                        <td className="flex-1 font-medium">Lunes 31, julio 2023</td>
                        <td className="flex-1 font-medium">Ingreso</td>
                        <td className="flex-1 font-medium">Sebastian Huertas</td>
                        <td className="flex">
                        <button className="mx-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-1 px-2 rounded flex"><FaIcons.FaPrint className="mx-2 m-1"/></button>
                        <button className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex"><FaIcons.FaCopy className="mx-2 m-1"/></button>
                        <button className="mx-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded flex"><FaIcons.FaEdit className="mx-2 m-1"/></button>
                        <button className="mx-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded flex"><FaIcons.FaTrash className="mx-2 m-1"/></button>
                        </td>
                        </tr>
                       </tbody>
                    </table>    
              </div>

          </section>
          
            </div>
    )
}
export default NewMovement;