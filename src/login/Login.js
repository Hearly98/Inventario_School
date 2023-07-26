import React from "react";

const Login = () =>{
    return (
        <div className=" w-100 p-3">
            <section className="bg-blue-800 w-1/2 h-96">
                    <div className="text-center">
                    <svg>logo</svg>
                    <p className="text-white font-medium text-3xl mb-10 ">Ingresar</p>
                    </div>
                    <section className=" flex text-center flex-col p-2">
                        <div className="p-2"> 
                        <label className="text-white">Usuario</label>
                        <input className=" placeholder:Usuario border"></input>
                        </div>
                        <div>
                        <label className="text-white">Contraseña</label>
                        <input className=" placeholder:Contraseña border"></input>
                        </div>
                        <div className="items-center m-5 w-100 font-bold">
                        <a className="p-3 rounded-xl bg-lime-200 w-100">Buscar</a>
                        </div>
                    </section>
            </section>
        </div>
    );
}
export default Login;