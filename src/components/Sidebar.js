import React from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
const Sidebar = () =>{
    return (
        <div>
           <ul>
                <li>
                <NavLink to="/" exact className="" activeClassName="active"><FaIcons.FaHome/>Inicio</NavLink> 
                </li>
                <li>
                <NavLink to="/logistica" exact className="" activeClassName="active"><FaIcons.FaTruck/>Logistica</NavLink>
                </li>
                <li>
                <NavLink to="/tesoreria" exact className="" activeClassName="active"><FaIcons.FaCashRegister/>Tesoreria</NavLink>
                </li>
                <li>
                <NavLink to="/ventas" exact className="" activeClassName="active"><FaIcons.FaMoneyBill/>Ventas</NavLink>
                </li>
                <li>
                <NavLink to="/reportes" exact className="" activeClassName="active"><FaIcons.FaChartBar/>Reportes</NavLink>
                </li>
           </ul>
           <ul>
                <li>
                <NavLink to="/configuracion" exact className="" activeClassName="active"><FaIcons.FaCog/>Configuracion</NavLink>
                </li>    
                <li>
                <NavLink to="/ayuda" exact className="" activeClassName="active"><FaIcons.FaInfo/>Ayuda</NavLink>
                </li>
           </ul>
        </div>
    );
}
export default Sidebar;