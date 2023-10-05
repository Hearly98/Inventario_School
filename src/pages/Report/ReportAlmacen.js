import React from "react";

const ReportAlmacen = () =>{
    return (
        <div>
            <section className="w-100 flex justify-between bg-gray-100 p-6">
                <h1 className="font-medium text-2xl"> Reporte de Stock de Almacenes</h1>
                <p>Reportes/Stock Almacen</p>
            </section>
            <section className="flex justify-between m-4 border p-3 shadow rounded-lg">
                    <div>
                        <p>Almacen</p>
                        <select className="border m-2 w-48">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div>
                        <p>Linea</p>
                        <select className="border m-2 w-48">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div>
                        <p>Categoria</p>
                        <select className="border m-2 w-48">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div>
                        <p>Tipo</p>
                        <select className="border m-2 w-48">
                            <option>Todos</option>
                        </select>
                    </div>
                    <div>
                        <p>Producto/Codigo</p>
                        <input className="border p-1"></input>
                    </div>
                   <div className="w-100 m-6">
                   <button className="p-2 px-6 w-100 bg-blue-500 text-white text-center">Buscar</button>
                   </div>
            </section>
            <section className="border border-gray-300 shadow w-100 h-full m-4 p-6 rounded-lg">

            </section>
        </div>
    );
}
export default ReportAlmacen;