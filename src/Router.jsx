import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import Initial from './pages/Initial';
import Knowledge from './pages/Knowledge';
import Login from './pages/Login';
import Register from './pages/Register';
import Ranking from './pages/Ranking';
import CSGame from './pages/CSGame';
import Info from './pages/Info';
import JSPage from './pages/JSPage';
import Modules from './pages/Modules';

const Router = () => (
  <Routes>
    <Route exact path="/" element={ <Initial/> } />
    <Route exact path="/login" element={ <Login/> } />
    <Route exact path="/cadastro" element={ <Register/> } />
    <Route exact path="/jogo" element={ <Game/> } />
    <Route exact path="/javascript" element={ <JSPage/> } />
    <Route exact path="/modulos" element={ <Modules/> } />
    <Route exact path="/seguranca" element={ <CSGame/> } />
    <Route exact path="/informatica" element={ <Info/> } />
    <Route exact path="/aprendendo" element={ <Knowledge/> } />
    <Route exact path="/ranking" element={ <Ranking/> } />
  </Routes>
);

export default Router;
