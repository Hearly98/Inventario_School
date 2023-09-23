import React from "react";
import * as FaIcons from 'react-icons/fa';
const NewMovement = () =>{
    const data = [
        { descripcion: 'Producto 1', cantidad: 1, unidadMedida: <select className="border border-gray-300 rounded"><option>und</option></select>, serie: ""},
        { descripcion: 'Producto 2', cantidad: 1, unidadMedida: <select className="border border-gray-300 rounded"><option>und</option></select>, serie: ""},
        { descripcion: 'Producto 3', cantidad: 1, unidadMedida: <select className="border border-gray-300 rounded"><option>und</option></select>, serie: ""}
     ];
    return(
            <div>
            
                <section className="border border-gray-300">
                <aside className=" h-auto gap-6 shadow border border-gray-300 rounded m-3">
                    <ul className="grid grid-cols-1 md:grid-cols-3 m-4">
                        <li className="flex flex-col p-3">
                            <label className="font-medium">Nro. Novimiento</label>
                            <input className="p-1 rounded border border-gray-300" disabled/>
                        </li>
                        <li className="flex flex-col p-3">
                            <label className="font-medium">Fecha</label>
                            <input className="p-1 rounded border border-gray-300" disabled/>
                        </li>
                        <li className="flex flex-col p-3">
                            <label className="font-medium">Tipo de Novimiento</label>
                            <select className="p-1 rounded border border-gray-300">
                                <option>Ingreso</option>
                                <option>Salida</option>
                                <option>Transferencia</option>
                            </select>
                        </li>
                        <li className="flex flex-col p-3">
                            <label className="font-medium">Almacén</label>
                            <select className="p-1 rounded border border-gray-300">
                                <option>ALMACEN 1</option>
                                <option>ALMACEN 2</option>
                            </select>
                        </li>
                        <li className="flex flex-col p-3">
                            <label className="font-medium">Entregado por</label>
                            <input className="p-1 rounded border border-gray-300"/>
                        </li>
                    </ul>                
                </aside>
                </section>
             <section className="m-3 rounded shadow border border-gray-300">
            <h1 className="font-medium text-xl bg-blue-500 text-white p-2">Lista de Productos</h1>
            <aside className="m-4">
                <label className="flex font-medium mb-2"><FaIcons.FaFilter className="mx-2 m-1"/>Producto</label>
                <div className="flex">
                <input className="border border-gray-400 p-1 rounded-s-md" />
                <button className="flex p-1 bg-blue-500 hover:bg-blue-600 text-white"><FaIcons.FaPlusCircle className="mx-1 m-1"/>Agregar</button>
                </div>
            </aside>
            <aside className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
            <table className="border w-full text-sm">
                        <thead className="flex p-2 justify-around text-center bg-slate-400">
                            <td className="flex-1 font-medium">Descripción</td>
                            <td className="flex-1 font-medium">Cant.</td>
                            <td className="flex-1 font-medium">U.M.</td>
                            <td className="flex-1 font-medium">Serie</td>
                            <td className="flex-1 font-medium">Serie</td>
                        </thead>
                        <tbody>
                            {/* Aquí van las filas y celdas de datos */}
                            {data.map((item, index) => (
                            <tr key={index} className="flex p-2 justify-between">
                            <td className="flex-1 text-center">{item.descripcion}</td>
                            <td className="flex-1 text-center">{item.cantidad}</td>
                            <td className="flex-1 text-center">{item.unidadMedida}</td>
                            <td className="flex-1 text-center border m-1 border-gray-300 rounded">{item.serie}</td>
                            {/* botones */}
                            <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded flex"><FaIcons.FaTrash className="mx-2 m-1"/>Remover</button></td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
            </aside>
        </section>
            <section className="m-8 cursor-pointer flex justify-center font-medium text-yellow-50 ">
                <button className="bg-green-500 m-2 p-3 w-24 text-center rounded shadow-lg hover:bg-green-600">Guardar</button>
            </section>
                    </div>
            )
        }
export default NewMovement;