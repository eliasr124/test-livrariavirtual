import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Home from './Home';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para verificar o nome de usuário e senha
    // Por simplicidade, vamos apenas verificar se ambos não estão vazios
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Por favor, insira nome de usuário e senha');
    }
  };

  return (
    <div className='login-container'>
      {loggedIn ? (
        <div>
          <Navbar />
          <h2>Bem-vindo, {username}!</h2>
          <Home />
          <button onClick={() => setLoggedIn(false)}>Sair</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Usuário:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
};

export default Login;
