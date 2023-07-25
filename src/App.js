import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import '../src/App.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Logistic from './pages/Logistic';
import Sales from './pages/Sales'
import Reports from './pages/Reports';
import Settings from './pages/Settings'
import HelpDesk from './pages/HelpDesk'
import ReportAlmacen from './pages/ReportAlmacen';
import ReportVentas from './pages/ReportVentas';
function App() {
  return (
    <Router>
          
        <div className='flex'>
        <Sidebar/>
        <div className='content w-full p4'>
        <Navbar/>
        <Routes>
          <Route path='/'  exact={true} Component={Home}/>
          <Route path='/logistica'  exact={true} Component={Logistic}/>
          <Route path='/ventas'  exact={true} Component={ReportVentas}/>
          <Route path='/reportes'  exact={true} Component={ReportAlmacen}/>
          <Route path='/configuracion'  exact={true} Component={Settings}/>
          <Route path='/ayuda' exact={true}  Component={HelpDesk}/>   
        </Routes>
        </div>
        </div>
    </Router>
  );
}

export default App;
