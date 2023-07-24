
import React from "react";

const Home = () =>{
    return (
        <div className="border-slate-200 p-3">

          <section className="p-4 m-3"> 
          <h1 className="text-3xl font-medium">Dashboard</h1>
          </section>

           <section className="flex justify-between">
            <div className="w-1/2 border rounded-xl border-gray-400 m-2">
            <p className="bg-sky-600 p-2  text-white">Resumen Ventas de los últimos meses</p>
            <aside className="h-64 text-center">
                grafico
            </aside>
            </div>
            <div className="w-1/2 border rounded-xl border-gray-400 m-2">
            <p className="bg-sky-600 p-2 text-white">Resumen Cobranzas de los últimos meses</p>
            <aside className="h-64 text-center">
                grafico
            </aside>

            </div>
           </section>
        </div>
    );
}
export default Home;