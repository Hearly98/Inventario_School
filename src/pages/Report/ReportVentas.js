import React from "react";

const ReportVentas = () => {
    return (
        <div className=" bg-gray-100 h-full flex-1">
        <section className="w-100 flex justify-between p-6">
            <h1 className="font-medium text-2xl"> Reporte de Ventas</h1>
            <p>Reportes/Ventas</p>
        </section>
        <section className="flex justify-between m-4 border p-3 shadow rounded-lg bg-slate-50">
                <div>
                    <p>Fecha</p>
                   <input type="date" className="border border-gray-300 rounded m-2"></input>-
                   <input type="date" className="border border-gray-300 rounded m-2"></input>
                </div>
                <div>
                    <p>Cliente</p>
                    <input className="border border-gray-300 rounded m-2"></input>
                </div>
                <div>
                    <p>Producto/Codigo</p>
                    <input className="border border-gray-300 rounded m-2 "></input>
                </div>
               <div className="w-100 m-6">
               <button className="p-2 px-6 w-100 bg-blue-500 text-white text-center">Buscar</button>
               </div>
        </section>
        <section className="border bg-slate-50 shadow w-100 h-auto m-4 p-6 rounded-lg">
       
        </section>
    </div>
    )
}
export default ReportVentas;