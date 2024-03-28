import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';

function App() {
  return (
      <div className='App'>
        <Outlet />
      </div>
  );
}

export default App;
