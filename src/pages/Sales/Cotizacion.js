import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa';
import DatePicker from 'react-datepicker'
import { NavLink } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css'
const Cotizacion = () =>{
  const [dateRange, setDateRange] = useState([null, null]);  
  const[startDate, endDate]=dateRange;
  const handleChange =(update)=>{setDateRange(update)}
  const handleSave =()=>{if(startDate && endDate){
    console.log('inicio:', startDate);
    console.log('fin:', endDate);
  } else {
    console.log('Por favor, selecciona un rango de fechas válido.');
        }
      };
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
          </section>
          <section className=" shadow-lg rounded w-auto h-auto m-3 border border-gray-300 bg-slate-50">
               <div className="grid grid-cols-1 md:grid-cols-4 justify-around p-3">
               <div className="flex flex-col space-y-4">
                    <div>
                    <p className="flex items-center font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Rango de Fechas</p>
                    <DatePicker 
                      className="w-full lg:w-full m-2  text-center py-1 rounded border border-gray-300"
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                      selected={startDate}
                        onChange={handleChange}
                        isClearable={false}
                        readOnly={false}
              />
            </div>
                    
                </div>
                <div className="flex-flex-col">
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro General</p>
                    <input className="border border-gray-300 rounded m-2 w-full p-1"></input>
                </div>
                <div className="flex-flex-col">
                    <p className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Filtro de Estados</p>
                    <div className="border border-gray-300 p-1 m-3 mt-4 rounded w-full">
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-green-700">Facturados</label> 
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-yellow-500">Pendientes</label> 
                    <input type="checkbox" className="mx-2" name="FilterStates"/><label className="text-red-700">Eliminados</label> 
                    </div>
                    
                </div>
               <div className="w-100 m-6">
               <button onClick={handleSave} className="flex font-medium p-2 mt-3 px-6 w-full cursor-pointer rounded bg-blue-500 hover:bg-blue-600 text-white text-center"><FaIcons.FaSearch className="mx-2 m-1"/>Buscar</button>
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