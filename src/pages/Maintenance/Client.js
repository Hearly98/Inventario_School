import React from "react";
import * as FaIcons from 'react-icons/fa';
const Client = () =>{
    return(
        <div>
          <section className="w-100 bg-gray-100 p-6">
            <div className="flex  justify-between mb-5">
            <h1 className="font-medium text-2xl">Clientes</h1>
            <p className="text-gray-500">Clientes/<a className="cursor-pointer text-sky-500 font-medium">Inicio</a></p>
            </div>
            <div className="bg-blue-500 text-white p-3 rounded w-40">
            <a className="flex"><FaIcons.FaPlusCircle className="mx-2 m-1"/>Crear Cliente</a>
            </div>
          </section>
            <section className="shadow-lg rounded w-100 h-auto m-3 border border-gray-300">
                <div className="p-6 flex">
                    <div>
                        <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                        <input className="border border-gray-300 m-2 p-1 rounded w-64"></input>
                    </div>
                    <div className="bg-gray-300 rounded w-48 h-9 p-1.5 mt-10 border border-gray-400 shadow-sm">
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