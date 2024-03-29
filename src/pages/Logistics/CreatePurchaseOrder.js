import React from "react";
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom"; 

const CreatePurchaseOrder = () =>{
    const data = [
        { nombre: 'Producto 1', cantidad: 5, unidadMedida: 'und', precioUnitario: 10, precioTotal: 50 },
        { nombre: 'Producto 2', cantidad: 3, unidadMedida: 'kl', precioUnitario: 15, precioTotal: 45 },
        { nombre: 'Producto 3', cantidad: 2, unidadMedida: 'lt', precioUnitario: 8, precioTotal: 16 }
     ];
    return(
        //section fondo
        <div className="flex-1 bg-gray-100 h-full p-1">
            <section className="p-4">
            <h1 className="font-medium text-2xl m-2">Crear Orden de Compra</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4">
            <div>
            <label className="font-medium">Nro. de Orden</label>
            <input className=" p-1 border border-gray-400 flex rounded " disabled/>
            </div>
            <div>
            <label className="font-medium">Fecha de Emisión</label>
            <input className=" p-1 border border-gray-400 flex rounded"/>  
            </div>   
            <div>
            <label className="font-medium">Fecha de Entrega</label>
            <input className=" p-1 border border-gray-400 flex rounded" type="date"/>  
            </div>  
            </div>

            {/*Section Proveedor */} 

            <section className=" bg-slate-50 m-4 rounded border h-auto">
                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Proveedor</h1>

                {/* Datos Proveedor */} 
               <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                    <div className="flex flex-col m-2">
                    <label className="font-medium flex">Proveedor</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div>
                    <div className="flex flex-col m-2 w-64">
                    <label className="font-medium flex">Nro. Documento</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div> 
                    <div className="flex flex-col m-2 ">
                    <label className="font-medium flex">Dirección</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div> 
                </div> 
            </section>
            {/*Section Contacto*/} 

            <section className=" bg-slate-50 m-4 rounded border h-auto">

                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Contacto</h1>

            {/*Section Datos Contacto */} 
               <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                    <div className="flex flex-col m-2">
                    <label className="font-medium flex">Nombre Contacto</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div>
                    <div className="flex flex-col m-2">
                    <label className="font-medium flex">Area</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div> 
                </div> 
            </section>
            {/*Section Detalle de OC */} 
            <section className=" bg-slate-50 m-4 rounded border">
                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Detalle</h1>
                {/*Section Datos Detalle de OC */} 
               <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                    <div className="flex flex-col m-2">
                    <label className="font-medium flex">Producto</label>
                    <div className=" flex ">
                    <input className="p-1 border w-72 border-gray-400"/>
                    <button className="p-1 cursor-pointer w-32 flex bg-blue-500 hover:bg-blue-600 text-white"><FaIcons.FaPlus className="mx-3 m-1"/>Agregar</button> 
                    </div>
                    </div>
                {/*Section Condicionales para Detalle OC*/}
                <div className="grid grid-cols-1 md:grid-cols-4 text-sm ml-3 m-4">
                <div className="flex flex-col">
                        <label className="font-medium flex">¿Mostrar UM?</label>
                        <select className="w-24 border border-gray-400 text-center p-1">
                            <option>SI</option>
                            <option>NO</option>
                        </select>
                        </div> 
                        <div className="flex flex-col">
                        <label className="font-medium flex">¿Mostrar Precios?</label>
                        <select className="w-24 border border-gray-400 rounded text-center p-1">
                            <option>SI</option>
                            <option>NO</option>
                        </select>
                        </div> 
                        <div className="flex flex-col">
                        <label className="font-medium flex">¿Mostrar Total?</label>
                        <select className="w-24 border border-gray-400 rounded text-center p-1">
                            <option>SI</option>
                            <option>NO</option>
                        </select>
                        </div> 
                        <div className="flex flex-col">
                        <label className="font-medium flex">¿Mostrar Firma?</label>
                        <select className="w-24 border border-gray-400 rounded text-center p-1">
                            <option>SI</option>
                            <option>NO</option>
                        </select>
                        </div> 
                    </div> 
                    </div> 
                    {/*Section Tabla de Productos para OC*/}
                    <div className="border border-gray-300 shadow w-100 h-full m-8 p-6 rounded">
                    <table className="border w-full">
                       <thead>
                       <tr  className="flex p-2 justify-between  bg-slate-400">
                       <th className="font-medium flex-1">Nombre</th>
                        <th className="font-medium flex-1">Cant.</th>
                        <th className="font-medium flex-1">U.M</th>
                        <th className="font-medium flex-1">P. Unitario</th>
                        <th className="font-medium flex-1">P. Total</th>
                        <th className="font-medium flex-1"></th>
                       </tr>
                       </thead>
                       <tbody>
                         {/* Aquí van las filas y celdas de datos */}
                         {data.map((item, index) => (
                        <tr key={index} className="flex p-2 justify-between">
                        <td className="flex-1">{item.nombre}</td>
                        <td className="flex-1 text-center">{item.cantidad}</td>
                        <td className="flex-1 text-center">{item.unidadMedida}</td>
                        <td className="flex-1 text-center">{item.precioUnitario}</td>
                        <td className="flex-1 text-center">{item.precioTotal}</td>
                        {/* botones */}
                        <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex"><FaIcons.FaTrash className="mx-2 m-1"/>Remover</button></td>
                        </tr>
                        ))}
                        <tr className="grid grid-cols-1 md:grid-cols-1 text-sm border border-gray-300 p-3">
                             
                        <td className="md:col-span-2">
                        <div className="flex items-end justify-end" >
                        <label className="font-medium mx-2 text-base">Importe Total</label>
                       
                        <select className="w-12 text-center p-1 bg-gray-200 border border-gray-400">
                            <option>S/.</option>
                            <option>$</option>
                        </select>
                        <input className="border border-gray-400 p-1 w-auto"/>
                        </div>
                        </td>
                        </tr>
                       </tbody>
                    </table>
                </div>
            </section>
            {/*Section Consideraciones */} 
             <section className=" bg-slate-50 m-4 rounded border h-auto">
                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Consideraciones</h1>
               <div className="m-4">
               <textarea className="border border-gray-400 p-3 w-full h-auto rounded"/>
               </div>
            </section>
            {/*Section botones de guardado*/}
            <section className="m-8 cursor-pointer flex justify-center font-medium text-yellow-50 ">
            <button className="bg-green-500 m-2 p-3 w-24 text-center rounded shadow-lg hover:bg-green-600">Guardar</button>
            <NavLink to="/ordenCompra" exact className="bg-blue-500 m-2 p-3 hover:bg-blue-600 text-center rounded w-38 shadow-lg">Orden de Compras</NavLink>    
            </section>
            </section>
           
        </div>
    )
}

export default CreatePurchaseOrder;