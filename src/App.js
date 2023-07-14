import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Logistic from './pages/Logistic';
import Sales from './pages/Sales'
import Reports from './pages/Reports';
import Settings from './pages/Settings'
import HelpDesk from './pages/HelpDesk'
import SubMenu from './components/SubMenu';
function App() {
  return (
    <Router className="container">
        <Sidebar />
        <div className='content'>
        <Navbar />
        <Routes>

          <Route path='/'  exact={true} Component={Home}/>
          <Route path='/logistica'  exact={true} Component={Logistic}/>
          <Route path='/ventas'  exact={true} Component={Sales}/>
          <Route path='/reportes'  exact={true} Component={Reports}/>
          <Route path='/configuracion'  exact={true} Component={Settings}/>
          <Route path='/ayuda' exact={true}  Component={HelpDesk}/>
        </Routes>
        </div>
        <SubMenu />
    </Router>
  );
}

export default App;
