import React from "react";
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom";
const StockAlmacen = () =>{
    return(
        <div className=" bg-gray-100 flex-1">
          <section className="w-100 p-6">
            <div className="flex  justify-between mb-5">
            <h1 className="font-medium text-2xl">Stock por Almacen</h1>
            <p className="text-gray-500"><NavLink to="/" className="cursor-pointer text-sky-500 font-medium">Inicio</NavLink>/Stock por Almacén</p>
            </div>
          </section>
            <section className="bg-gray-50 shadow-lg rounded w-100 h-auto m-3 border border-gray-300">
                <div className="p-6 flex">
                    <div>
                        <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro</p>
                        <input className="border border-gray-300 m-2 p-1 rounded w-64"/>
                    </div>
                    <div className="bg-gray-300 hover:bg-gray-400 cursor-pointer rounded w-40 h-9 p-1.5 mt-10 border border-gray-400 shadow-sm">
                        <button className="flex"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</button>
                    </div>
                </div>
                <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
                    <table className="border w-full">
                       <thead className="flex p-2 justify-between  bg-slate-400">
                        <td className="font-medium">Producto</td>
                        <td className="font-medium">Código</td>
                        <td className="font-medium">ALMACEN 1</td>
                        <td className="font-medium">ALMACEN 2</td>
                       </thead>
                       <tbody className="flex p-2 justify-between">
                       {/*Datos del Stock de los productos por almacen */}
                        <td>filtro de datos de c#</td>
                       </tbody>
                    </table>
                </div>

            </section>
            
        </div>
    )
}
export default StockAlmacen;