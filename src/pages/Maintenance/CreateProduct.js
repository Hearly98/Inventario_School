import React from "react";
import { NavLink } from "react-router-dom";

const CreateProduct = () => {
  return (
    <div className="flex-1 h-full bg-gray-100">
      <section className="p-6">
        <h1 className="font-medium text-2xl">Crear Producto</h1> 
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 h-auto gap-6 p-10 font-medium border shadow-lg rounded m-2 bg-gray-50">
        
        <div className="flex flex-col p-3">
          <label>Codigo Interno</label>
          <input className=" border border-gray-300 rounded p-1" />
        </div>
        <div className="flex flex-col p-3">
          <label>Nombre</label>
          <input className="border border-gray-300 rounded p-1" />
        </div>
        <div className="p-3">
          <p>Unidad de Medida</p>
          <select className="border border-gray-300 rounded h-8 w-48">
            <option>Seleccione...</option>
          </select>
        </div>
        <div className="p-3">
            <p>Marca</p>
            <select className="border border-gray-300 rounded h-8 w-48">
              <option>Seleccione</option>
            </select>
        </div>
        <div className="p-3">
            <p>Linea</p>
            <select className="border border-gray-300 rounded h-8 w-48">
              <option>Seleccione</option>
            </select>
        </div>
        <div className="flex flex-col p-3">
          <label>Stock Minimo</label>
          <input className="border border-gray-300 rounded p-1" />
        </div>
        <div className="p-3">
        <p>Seleccionar Almacenes</p>
            <select className="border border-gray-300 rounded h-8 w-48">
              <option>Seleccione</option>
            </select>
        </div>
        <div className="flex flex-col p-3">
        <label>Descripcion</label>
        <textarea className="border border-gray-300 rounded"></textarea> 
        </div>
        <div className="flex flex-col p-3">
        <label>Precio Sugerido</label>  
        <div className="flex">
          <input className="border border-gray-300 p-1"/>
        <select className="border border-gray-300 bg-gray-200">
          <option>SOLES</option>
          <option>DOLARES</option>
        </select></div>
        </div> 
      </section>        
        <section className="m-8 cursor-pointer flex justify-center font-medium text-yellow-50 ">
        <button className="bg-green-500 m-2 p-3 w-24 text-center rounded shadow-lg hover:bg-green-600">Guardar</button>
        <NavLink to="/productos" exact className="bg-blue-500 m-2 p-3 hover:bg-blue-600 text-center rounded w-38 shadow-lg">Lista de Productos</NavLink>    
        </section>
    </div>
  );
};

export default CreateProduct;
