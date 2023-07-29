import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
const Sidebar = () =>{
    const [showMantenimiento, setShowMantenimiento] = useState(false);
    const [showLogistica, setShowLogistica] = useState(false);
    const [showReportes, setShowReportes] = useState(false);
  
    // Funciones para mostrar/ocultar los submenús
    const toggleMantenimiento = () => {
      setShowMantenimiento(!showMantenimiento);
    };
  
    const toggleLogistica = () => {
      setShowLogistica(!showLogistica);
    };
  
    const toggleReportes = () => {
      setShowReportes(!showReportes);
    };
  
    return (
        <div className="w-64 h-auto min-h-screen bg-slate-900 text-base text-white" >
           <ul>
                <li className="p-5 border cursor-pointer border-gray-500 hover:bg-slate-600">
                    FreakyCo
                </li>
                <li className="p-5 border border-gray-500 hover:bg-slate-600 cursor-pointer font-medium">
                Santo Tomas de Aquino
                </li>
                <li className="p-2 hover:bg-slate-600">
                    <NavLink to="/" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaHome className="mx-3"/>Inicio</NavLink> 
                </li>
                <li className="p-2 hover:bg-slate-600 " onClick={toggleMantenimiento}>
                    <p className="flex m-2 "><FaIcons.FaTruck className="mx-3 "/>Mantenimiento</p>
                {showMantenimiento && (
                <ul>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/clientes" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Clientes</NavLink>
                        </li>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/productos" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Productos</NavLink>
                        </li>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/proveedores" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Proveedores</NavLink>
                        </li>
                </ul>
                )}
                </li>
                <li className="p-2 hover:bg-slate-600" onClick={toggleLogistica}>
                    <p className="flex m-2" ><FaIcons.FaTruck className="mx-3"/>Logistica</p>
                    {showLogistica && (
                <ul>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/ordenCompra" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Orden de Compra</NavLink>
                        </li>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/stockAlmacen" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Stock Almacen</NavLink>
                        </li>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/movimientos" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Movimientos</NavLink>
                        </li>
                </ul>
                    )}
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/tesoreria" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaCashRegister className="mx-3"/>Tesoreria</NavLink>
                </li>
                <li className="p-2 hover:bg-slate-600">
                <NavLink to="/ventas" exact={true} className="flex m-2" activeclassname="active"><FaIcons.FaMoneyBill className="mx-3"/>Ventas</NavLink>
                </li>
                <li className="p-2 hover:bg-slate-600" onClick={toggleReportes}>
                    <p className="flex m-2 cursor-pointer"><FaIcons.FaChartBar className="mx-3 "/>Reportes</p>
                {showReportes && (
                <ul>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/reporteVentas" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Reportes Ventas</NavLink>
                        </li>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/reporteStock" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Reportes Stock</NavLink>
                        </li>
                        <li className="p-3 hover:bg-slate-500">
                        <NavLink to="/cuentasPorCobrar" exact={true} className="flex" activeclassname="active"><FaIcons.FaStopCircle className="mx-3 mt-1"/>Cuentas Por Cobrar</NavLink>
                        </li>
                </ul>
                )}
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