import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import '../src/App.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Maintenance/Products';
import Provider from './pages/Maintenance/Provider'
import Reports from './pages/Report/Reports';
import Settings from './pages/Settings'
import HelpDesk from './pages/HelpDesk/HelpDesk'
import ReportAlmacen from './pages/Report/ReportAlmacen';
import ReportVentas from './pages/Report/ReportVentas';
import Client from './pages/Logistics/Client';
import Client from './pages/Maintenance/Client';
function App() {
  return (
    <Router>
          
        <div className='flex'>
        <Sidebar/>
        <div className='content w-full p4'>
        <Navbar/>
        <Routes>
        {/* Ruta de la página de inicio de sesión */}
        <Route path='/login' element={<Login />} />
        <>
          <Route path='/'  exact={true} Component={Home}/>
          <Route path='/clientes'  exact={true} Component={Client}/>
          <Route path='/productos'  exact={true} Component={Products}/>
          <Route path='/proveedores'  exact={true} Component={Provider}/>
          <Route path='/configuracion'  exact={true} Component={ReportAlmacen}/>
          <Route path='/ayuda' exact={true}  Component={HelpDesk}/>   
          <Route path='/ayuda' exact={true}  Component={HelpDesk}/>   
          </>
        </Routes>
        </div>
        </div>
    </Router>
  );
}

export default App;
