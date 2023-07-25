import React from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
const Sidebar = () =>{
    return (
        <div className="w-64 h-screen bg-slate-900 text-base text-white" >
           <ul>
                <li className="p-5 border border-gray-500 hover:bg-slate-600">
                    FreakyCo
                </li>
                <li className="p-5 border border-gray-500 hover:bg-slate-600 font-medium">
                Santo tomas de Aquino
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaHome className="mx-3"/>Inicio</NavLink> 
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/logistica" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaTruck className="mx-3"/>Logistica</NavLink>
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/tesoreria" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaCashRegister className="mx-3"/>Tesoreria</NavLink>
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/ventas" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaMoneyBill className="mx-3"/>Ventas</NavLink>
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/reportes" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaChartBar className="mx-3"/>Reportes</NavLink>

                </li>
                <li className="p-3"></li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/configuracion" exact className="flex m-2" activeClassName="active"><FaIcons.FaCog className="mx-3"/>Configuracion</NavLink>
                </li>    
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/ayuda" exact className="flex m-2" activeClassName="active"><FaIcons.FaInfo className="mx-3"/>Ayuda</NavLink>
                </li>
           </ul>
        </div>
    );
}
export default Sidebar;