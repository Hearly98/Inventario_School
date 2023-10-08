
import React from "react";
import * as FaIcons from 'react-icons/fa';
const Issued = () =>{
    return(
        <div>
          <section className=" shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50">

               <div className="grid grid-cols-1 md:grid-cols-4 p-3">

               <div className="grid grid-cols-1"> 
                    <p className="flex font-medium m-2"><FaIcons.FaFilter className="mx-2 m-1"/>Rango de Fechas</p>
                    <div className="flex m-2">
                    <input type="date" className="border border-gray-300 rounded p-1"></input>-
                    <input type="date" className="border border-gray-300 rounded p-1"></input>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <p className="flex font-medium m-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                    <input className="border border-gray-300 rounded m-2 p-1"></input>
                </div>

                <div className="grid grid-cols-1">
                    <p className="flex font-medium m-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro de Estados</p>
                    <div className="border border-gray-300 p-1 m-2 mt-4 rounded">
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-green-700">Ingreso</label> 
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-yellow-500">Salida</label> 
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-red-700">Anulados</label> 
                    </div>  
                </div>

               <div className="grid grid-cols-1 mt-11 items-center">
               <button className="flex font-medium items-center h-8 justify-center cursor-pointer rounded bg-blue-500 hover:bg-blue-600 text-white"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</button>
               </div>
               </div>

               
              <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
        
                    <table className="border w-full">
                       <thead className="flex p-2 justify-between  bg-slate-400">
                        <td className="flex-1 font-medium">Nro.</td>
                        <td className="flex-1 font-medium">Tipo</td>
                        <td className="flex-1 font-medium">Cliente</td>
                        <td className="flex-1 font-medium">Precio Total</td>
                        <td className="flex-1 font-medium">Estado</td>
                        <td className="flex-1 font-medium"></td>
                       </thead>
                       <tbody>
                        <tr className="flex p-2 justify-between">
                        <td className="flex-1 font-medium">0004795</td>
                        <td className="flex-1 font-medium">DOC. INTERNO</td>
                        <td className="flex-1 font-medium">Sebastian Huertas</td>
                        <td className="flex-1 font-medium">S/. 900.00</td>
                        <td className="flex-1 font-medium">Pendiente</td>
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
export default Issued;