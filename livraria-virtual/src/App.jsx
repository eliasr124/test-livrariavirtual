import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
      <div className='App'>
        <Navbar />
        <h2> Livros lib</h2>
        <Outlet />
      </div>
  );
}

export default App;