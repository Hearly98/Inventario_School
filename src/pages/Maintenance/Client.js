import React from "react";
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom";
const Client = () =>{
    return(
        <div className="flex-1 h-full bg-gray-100">
          <section className="w-100 p-6">
            <div className="flex  justify-between mb-5">
            <h1 className="font-medium text-2xl">Clientes</h1>
            <p className="text-gray-500">Clientes/<a className="cursor-pointer text-sky-500 font-medium">Inicio</a></p>
            </div>
            <div className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white p-3 rounded w-40">
            <NavLink to="/crearCliente" className="flex"><FaIcons.FaPlusCircle className="mx-2 m-1"/>Crear Cliente</NavLink>
            </div>
          </section>
            <section className="shadow-lg rounded w-100 bg-slate-50 h-auto m-3 border border-gray-300">
                <div className="p-6 flex">
                    <div>
                        <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                        <input className="border border-gray-300 m-2 p-1 rounded w-64"></input>
                    </div>
                    <div className="bg-gray-300 hover:bg-gray-400 cursor-pointer  font-medium rounded w-40 h-9 p-1.5 mt-10 border border-gray-400 shadow-sm">
                        <a className="flex"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</a>
                    </div>
                </div>
                <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
                    <table className="border w-full">
                       <thead className="flex p-2 justify-between  bg-slate-400">
                        <td className="font-medium">Cliente</td>
                        <td className="font-medium">Documento</td>
                        <td className="font-medium">Telefono</td>
                        <td className="font-medium">Direccion</td>
                       </thead>
                       <tbody>
                        filtro de datos de c#
                       </tbody>
                    </table>
                </div>

            </section>
            
        </div>
    )
}
export default Client;
