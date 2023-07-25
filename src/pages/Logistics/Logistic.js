import React from "react";
import SubMenu from "../../components/SubMenu";

const Logistic = () =>{
    return (
        <div className="text-red-200">
            Logistica
            <SubMenu>Almacen</SubMenu>
            <SubMenu>Stock Por Almacen</SubMenu>
        </div>
    );
}
export default Logistic;