import React from "react";
import * as FaIcons from 'react-icons/fa';
import { NavLink } from "react-router-dom"; 

const CreatePurchaseOrder = () =>{
    return(
        <div className="flex-1 bg-gray-200 h-full p-1">
            <section className="p-4">
            <h1 className="font-medium text-2xl m-2">Crear Orden de Compra</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 p-2">
            <div>
            <label className="font-medium">Nro. de Orden</label>
            <input className="m-2 p-1 border border-gray-400 flex rounded"/>
            </div>
            <div>
            <label className="font-medium">Fecha de Emisión</label>
            <input className="m-2 p-1 border border-gray-400 flex rounded"/>  
            </div>   
            </div>
            <section className=" bg-slate-50 m-4 rounded border">
                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Proveedor</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 p-2">
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
            <section className=" bg-slate-50 m-4 rounded border">
                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Contacto</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 p-2">
                    <div className="flex flex-col m-2">
                    <label className="font-medium flex">Nombre Contacto</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div>
                    <div className="flex flex-col m-2 ">
                    <label className="font-medium flex">Area</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div> 
                </div> 
            </section>
            <section className=" bg-slate-50 m-4 rounded border">
                <h1 className="w-full font-medium text-white text-xl bg-blue-500 p-3">Detalle</h1>
               <div className="flex justify-around">
                    <div className="flex flex-col m-2">
                    <label className="font-medium flex">Producto</label>
                    <div className=" flex">
                    <input className="p-1 border rounded border-gray-400"/>
                    <a className="cursor-pointer w-28 flex bg-blue-500 hover:bg-blue-600 rounded text-white"><FaIcons.FaPlus className="mx-2 m-1"/>Agregar</a> 
                    </div>
                    </div>
                    <div className="flex flex-col m-2 ">
                    <label className="font-medium flex">Area</label>
                    <input className="p-1 border rounded border-gray-400"/>
                    </div> 
                </div> 
            </section>
            </section>
        </div>
    )
}

export default CreatePurchaseOrder;