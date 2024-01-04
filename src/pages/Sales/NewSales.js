import * as FaIcons from 'react-icons/fa';
import React from "react";
const NewSales = () =>{
  const data = [
    { nombre: 'Producto 1', cantidad: 5, unidadMedida: 'und', precioUnitario: 10, precioTotal: 50 },
    { nombre: 'Producto 2', cantidad: 3, unidadMedida: 'kl', precioUnitario: 15, precioTotal: 45 },
    { nombre: 'Producto 3', cantidad: 2, unidadMedida: 'lt', precioUnitario: 8, precioTotal: 16 }
 ];  
  return(
        <div >
          <section className="w-full shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50 md:text-lg">
               <form className="grid grid-cols-1 md:grid-cols-4 p-2 m-2">
               <label className="grid grid-cols-1 font-medium">Empresa
               <select className="border border-gray-400 rounded  font-normal p-2 m-2">
                    <option>Seleccione..</option>
                    <option>....</option>
                </select>                                     
                </label>
                <label className="grid grid-cols-1 font-medium">Tipo de Documento
                <input className="border border-gray-400 rounded font-normal p-2 m-2" disabled/></label>

                <label className="grid grid-cols-1 font-medium">Nro. de Documento
                <input className="border border-gray-400 rounded font-normal p-2 m-2" disabled/></label>

                <label className="grid grid-cols-1 font-medium">Fecha de Emision
                <input className="border border-gray-400 rounded font-normal p-2 m-2" disabled/></label>
      
                <label className="grid grid-cols-1 font-medium">Tipo de Pago
                <select className="border border-gray-400 rounded font-normal p-2 m-2 ">
                    <option>EFECTIVO</option>
                    <option>DEPOSITO</option>
                </select></label>

                <label className="grid grid-cols-1 font-medium">Almacén
                <select className="border border-gray-400 rounded font-normal p-2 m-2">
                    <option>Seleccione..</option>
                    <option>ALMACEN 1</option>
                </select></label>

                <label className="grid grid-cols-1 font-medium">Vendedor
                <select className="border border-gray-400 rounded font-normal p-2 m-2 ">
                    <option>Seleccione..</option>
                    <option>....</option>
                </select></label>

                <label className="grid grid-cols-1 font-medium">Moneda
                <select className="border font-normal p-2 m-2 border-gray-400 rounded">
                    <option>SOLES..</option>
                    <option>DOLARES</option>
                </select></label>

                </form>
                </section>
                <section className="shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50  md:text-lg">
                    <h1 className="font-medium text-white text-xl bg-blue-500 p-2">Cliente</h1>
                    <hr />
                  <form className="grid grid-cols-1 md:grid-cols-3 p-2 m-2">
                    <label className='grid grid-cols-1 font-medium'>Nro Documento
                    <input className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                    <label className='grid grid-cols-1 font-medium'>Nombre o Razón Social
                    <input className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                    <label className='grid grid-cols-1 font-medium'>Dirección
                    <input className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                  </form>
                </section>
                <section className="shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50  md:text-lg">
                    <h1 className="font-medium text-xl p-2 text-white bg-blue-500">Registro Anexado</h1>
                    <hr />
                  <form className="grid grid-cols-1 md:grid-cols-2 p-2 m-2">
                    <label className='grid grid-cols-1 font-medium'>Nro. Cotización
                    <input className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                    <label className='grid grid-cols-1 font-medium'>Nro. Orden de Compra
                    <input className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                    <label className='grid grid-cols-1 font-medium'>Observaciones
                    <textarea className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                  </form>
                </section>
                <section className="shadow-lg rounded w-100 h-auto m-3 border border-gray-300 bg-slate-50  md:text-lg">
                    <h1 className="font-medium text-xl p-2 text-white bg-blue-500">Detalle</h1>
                    <hr />
                  <form className="grid grid-cols-2 md:grid-cols-4 p-2 m-2">
                    <label className='grid grid-cols-1 font-medium'>Producto
                    <input className="border border-gray-400 rounded font-normal p-2 m-2"/></label>
                    <button className="p-1 mt-8 rounded cursor-pointer w-1/2 h-1/2 md:h-1/2 items-center justify-center flex bg-blue-500 hover:bg-blue-600 text-white"><FaIcons.FaPlus className="mx-3 m-1"/>Agregar</button> 
                  </form>
                  <aside>
                  <table className="border w-full">
                       <thead>
                       <tr  className="flex p-2 justify-between  bg-slate-400">
                       <th className="font-medium flex-1">Nombre</th>
                        <th className="font-medium flex-1">Cant.</th>
                        <th className="font-medium flex-1">U.M</th>
                        <th className="font-medium flex-1">P. Unitario</th>
                        <th className="font-medium flex-1">P. Total</th>
                        <th className="font-medium flex-1">Dscto</th>
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
                        <td className="flex-1 text-center"></td>
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
                  </aside>
                </section>
                <section className="m-8 cursor-pointer flex justify-center font-medium text-yellow-50">
                <button className="bg-green-500 m-2 p-3 w-24 text-center rounded shadow-lg hover:bg-green-600">Guardar</button>
                 </section>
            </div>
           
    )
}
export default NewSales;