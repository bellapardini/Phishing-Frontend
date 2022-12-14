import React, { useState } from 'react';
import { useContext } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Tutorial from '../components/Tutorial';
import SWContext from '../context/SWContext';
import { addUser } from '../services/functions';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { setUser, isTutorialOpen, setIsTutorialOpen } = useContext(SWContext);
  const handleEmail = ({ target }) => {
    setEmail(target.value);
    setIsEmailValid(target.value.includes('.') && target.value.includes('@'));
  };
  const handleClick = async () => {
    const userData = { name, email, password };
    // console.log('userData', userData);
    setIsLoading(true);
    const res = await addUser(userData);
    setIsLoading(false);
    const createdStatusNumber = 201;
    if (!res || res.status !== createdStatusNumber) {
      const isPwInvalid = password.length < 12;
      const pwMessage = 'Senha deve ter pelo menos 12 caracteres';
      setErrorMsg(isPwInvalid ? pwMessage : 'Registro inválido');
    } else {
      setUser(res.data);
      setIsTutorialOpen(true);
    }
  };
  return (
    <div className="relative">
      <Header/>
      <form>
        <header>
          <FaUserPlus/>
          <h2>Cadastro</h2>
        </header>
        <label htmlFor="input-name">
          {/* <h5>Nome</h5> */}
          <input
            id="input-name"
            data-testid="input-name"
            value={ name }
            placeholder="Seu nome"
            type="text"
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="input-email">
          {/* <h5>Email</h5> */}
          <input
            id="input-email"
            data-testid="input-email"
            value={ email }
            placeholder="Email"
            type="text"
            onChange={ handleEmail }
          />
        </label>
        <label htmlFor="input-password">
          {/* <h5>Senha</h5> */}
          <input
            id="input-password"
            data-testid="input-password"
            value={ password }
            placeholder="Senha"
            type="password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-register"
          disabled={
            name.length < 3 || !isEmailValid || password.length < 6
          }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
        <span data-testid="element-invalid_register">
          { errorMsg }
        </span>
      </form>
      { isLoading ? <Loading/> : null }
      { isTutorialOpen && <Tutorial/> }
    </div>
  );
}

export default Register;
