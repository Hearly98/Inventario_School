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
function App() {
  return (
    <Router>
          
        <div className='flex'>
        <Sidebar/>
        <div className='flex flex-col w-full'>
        <Navbar/>
        <div className='content flex-1'>
        <Routes>
          <Route path='/'  exact={true} Component={Home}/>
          <Route path='/clientes'  exact={true} Component={Client}/>
          <Route path='/crearCliente' exact={true} Component={CreateClient}/>
          <Route path='/crearProducto' exact={true} Component={CreateProduct}/>
          <Route path='/productos'  exact={true} Component={Products}/>
          <Route path='/proveedores'  exact={true} Component={Provider}/>
          <Route path='/crearProveedor' exact={true} Component={CreateProvider}/>
          <Route path='/ordenCompra' exact={true} Component={PurchaseOrder}/>
          <Route path='/crearOrdenCompra' exact={true} Component={CreatePurchaseOrder}/>
          <Route path='/reporteVentas'  exact={true} Component={ReportVentas}/>
          <Route path='/reporteStock' exact={true}  Component={ReportAlmacen}/>   
          <Route path='/configuracion' exact={true}  Component={Settings}/>   
          
        </Routes>
        </div>
        </div>
        </div>
    </Router>
  );
}

export default App;
