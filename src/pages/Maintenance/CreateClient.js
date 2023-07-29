import React from "react";
import { NavLink } from "react-router-dom";

const CreateClient = () => {
  return (
    <div className="flex-1 h-full bg-gray-100">
      <section className="p-6">
        <h1 className="font-medium text-2xl">Crear Cliente</h1> 
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 h-72 gap-6 p-10 font-medium border shadow-lg rounded m-2 bg-gray-50">
        <div className="p-3">
          <p>Tipo Documento</p>
          <select className="border border-gray-400 rounded h-8 w-48">
            <option>Seleccione...</option>
            <option>DNI</option>
            <option>RUC</option>
          </select>
        </div>
        <div className="flex flex-col p-3">
          <label>Documento</label>
          <div className="flex">
          <input className=" border border-gray-300 p-1" />
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 p-1 text-yellow-50">Obtener</button>
          </div>
        </div>
        <div className="flex flex-col p-3">
          <label>Nombre</label>
          <input className="border border-gray-300 rounded p-1" />
        </div>
        <div className="flex flex-col p-3">
          <label>Dirección</label>
          <input className="border border-gray-300 rounded p-1" />
        </div>
        <div className="flex flex-col p-3">
          <label>Codigo</label>
          <input className="border border-gray-300 rounded p-1" />
        </div>
        <div className="flex flex-col p-3">
          <label>Telefono</label>
          <input className="border border-gray-300 rounded p-1" />
        </div>
      </section>        
        <section className="m-8 flex justify-center cursor-pointer font-medium text-yellow-50 ">
        <button className="bg-green-500 m-2 p-3 w-24 text-center rounded shadow-lg hover:bg-green-600">Guardar</button> 
        <NavLink to="/clientes" exact className="bg-blue-500 m-2 p-3 w-36 text-center rounded shadow-lg hover:bg-blue-600">Lista de Clientes</NavLink>
        </section>
    </div>
  );
};

export default CreateClient;
