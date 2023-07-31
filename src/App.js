import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import '../src/App.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Maintenance/Products';
import Provider from './pages/Maintenance/Provider'
import ReportAlmacen from './pages/Report/ReportAlmacen';
import ReportVentas from './pages/Report/ReportVentas';
import Client from './pages/Maintenance/Client';
import Settings from './pages/Settings'
import CreateClient from './pages/Maintenance/CreateClient';
import CreateProduct from './pages/Maintenance/CreateProduct'
import CreateProvider from './pages/Maintenance/CreateProvider'
import PurchaseOrder from './pages/Logistics/PurchaseOrder';
import CreatePurchaseOrder from './pages/Logistics/CreatePurchaseOrder';
import StockAlmacen from './pages/Logistics/StockAlmacen';
import Movements from './pages/Logistics/Movements';
import NewMovement from './pages/Logistics/NewMovement';
function App() {
  return (
    <Router>
          
        <div className='flex'>
        <Sidebar/>
        <div className='flex flex-col w-full'>
        <Navbar/>
        <div className='content flex-1'>
        <Routes>
          <Route path='/'  exact Component={Home}/>
          {/*Seccion Maintance*/}
          <Route path='/clientes'  exact Component={Client}/>
          <Route path='/crearCliente' Component={CreateClient}/>
          <Route path='/crearProducto' Component={CreateProduct}/>
          <Route path='/productos' Component={Products}/>
          <Route path='/proveedores' Component={Provider}/>
          <Route path='/crearProveedor' Component={CreateProvider}/>
          {/*Seccion Logistics*/}
          <Route path='/ordenCompra' Component={PurchaseOrder}/>
          <Route path='/crearOrdenCompra' Component={CreatePurchaseOrder}/>
          <Route path='/stockAlmacen' exact Component={StockAlmacen}/>
          <Route path='/movimientos' exact Component={Movements}/>
            {/*Seccion de Movimientos de Almacenes*/}
            <Route path='/nuevoMovimiento' exact Component={NewMovement}/>
            <Route path='/listaDeMovimientos' exact Component={Movements}/>
          {/*Seccion Reportes*/}
          <Route path='/reporteVentas' Component={ReportVentas}/>
          <Route path='/reporteStock' Component={ReportAlmacen}/>   
          <Route path='/configuracion' Component={Settings}/>   
          
        </Routes>
        </div>
        </div>
        </div>
    </Router>
  );
}

export default App;
