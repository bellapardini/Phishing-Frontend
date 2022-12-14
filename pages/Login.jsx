import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaUserLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import SWContext from '../context/SWContext';
import { login } from '../services/functions';

function Login() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useContext(SWContext);
  const navigate = useNavigate();
  const handleUser = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);
  const isButtonEnabled = email.includes('@')
    && email.includes('.')
    && password.length > 5;
  const handleClick = async () => {
    setIsLoading(true);
    const res = await login({ email, password });
    setIsLoading(false);
    if (res.status === 201) {
      setUser(res.data);
      navigate('/modulos');
    } else {
      setErrorMessage(res.data.message);
    }
  }
  return (
    <div>
      <Header />
      <form>
        <header>
          <FaUserLock/>
          <h3>Faça login para começar</h3>
          <Link to="/cadastro">Registrar-se</Link>
        </header>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            onChange={ handleUser }
            placeholder="Email"
            type="email"
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            placeholder="Senha"
            onChange={ handlePassword }
            type="password"
            value={ password }
          />
        </label>
        <button
          type="button"
          onClick={ handleClick }
          disabled={ !isButtonEnabled }
        >
          Entrar
        </button>
        <span>{ errorMessage }</span>
      </form>
      { isLoading ? <Loading/> : null }
    </div>
  );
}

export default Login;
