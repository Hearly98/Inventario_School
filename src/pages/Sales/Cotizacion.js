import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom";
const Cotizacion = () =>{
    return (
        <div>
        <hr className="border-gray-300"></hr>
        <section className="w-100 p-6">
            <div className="flex  justify-between mb-5">
            <h1 className="font-medium text-2xl">Cotización</h1>
            <p className="text-gray-500"><NavLink to="/" className="cursor-pointer text-sky-500 font-medium">Inicio</NavLink>/Cotizacion</p>
            </div>
            <div className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white p-3 rounded w-44">
            <NavLink to="/crearCotizacion" exact className="flex" ><FaIcons.FaPlusCircle className="mx-2 m-1"/>Crear Cotización</NavLink>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 p-3">

            <div className="grid grid-cols-1"> 
                <p className="flex font-medium m-2"><FaIcons.FaFilter className="mx-2 m-1"/>Rango de Fechas</p>
                <div className="flex m-2">
                <input type="date" className="w-full border border-gray-300 rounded p-1"/> _ 
                <input type="date" className="w-full border border-gray-300 rounded p-1"/>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <p className="flex font-medium m-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                <input className="border border-gray-300 rounded m-2 p-1"></input>
            </div>

            <div className="grid grid-cols-1">
                <p className="flex font-medium m-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro de Estados</p>
                <div className="border border-gray-300 p-2 m-2 mt-4 rounded">
                <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-green-700">Ingreso</label> 
                <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-yellow-500">Salida</label> 
                <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-red-700">Anulados</label> 
                </div>  
            </div>

                <div className="grid grid-cols-1 mt-11 items-center">
               <button className="flex font-medium items-center h-9 justify-center cursor-pointer rounded bg-blue-500 hover:bg-blue-600 text-white"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</button>
               </div>
                </div>
                <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
                    <table className="border w-full">
                       <thead className="flex p-2 justify-between  bg-slate-400">
                        <td className="flex-1 font-medium">Nro.</td>
                        <td className="flex-1 font-medium">Emision</td>
                        <td className="flex-1 font-medium">Cliente</td>
                        <td className="flex-1 font-medium">Total</td>
                        <td className="flex-1 font-medium">Estado</td>
                        <td className="flex-1 font-medium"></td>
                       </thead>
                       <tbody>
                        <tr className="flex p-2 justify-between">
                        <td className="flex-1 font-medium">001-0000001</td>
                        <td className="flex-1 font-medium">jueves 17,agosto 2023</td>
                        <td className="flex-1 font-medium">Sebastian Huertas</td>
                        <td className="flex-1 font-medium">S/.100</td>
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
    );
}
export default Cotizacion;