import axios from 'axios';
import { URL } from './constants';

const baseURL = `${URL}/user`;

export const login = async (data) => {
  // data = { email, password };
  try {
    const endpoint = '/login';
    const res = await axios.post(baseURL + endpoint, data);
    // console.log(res);
    // const res = {
    //   status: 201,
    //   data: { token: '1', name: 'Caio', id: '67L' },
    // };
    // res.status = 201;
    // res.data = { token, name, id }; // (confirmar);
    return res;
  } catch (error) {
    console.log(error);
    return { status: 409, data: { message: 'Email ou senha incorreto' } };
  }
};

export const addUser = async ({ name, email, password }) => {
  const data = { name, email, password };
  try {
    const url = '/';
    const res = await axios({ url, method: 'post', data, baseURL });
    if (res.status === 201) {
      const response = await login({ email, password });
      return response;
    }
    // res.data = { message };
    return { status: 409, data: { message: 'Registro inválido' } };
  } catch (error) {
    console.log(error);
  }
};

export const localLogout = () => {
  localStorage.setItem('username', '');
  localStorage.setItem('token', '');
  localStorage.setItem('score', '');
};

const sortByScore = (a, b) => b.score - a.score;

export const getUsers = async () => {
  try {
    const res = await axios(baseURL);
    // console.log(res);
    // const res = { data: [
    //   { name: 'João', score: 50 },
    //   { name: 'Caio', score: 0 },
    //   { name: 'Ana', score: 100 },
    //   { name: 'Fred', score: 250 },
    //   { name: 'João', score: 50 },
    //   { name: 'Caio', score: 0 },
    //   { name: 'Ana', score: 100 },
    //   { name: 'Fred', score: 250 },
    //   { name: 'João', score: 50 },
    //   { name: 'Caio', score: 0 },
    //   { name: 'Ana', score: 100 },
    //   { name: 'Fred', score: 250 },
    // ]};
    const board = res.data.sort(sortByScore);
    // res.status = 200;
    // res.data = [{ name, email, score }];
    return board.slice(0,10);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const putScore = async (data, token) => {
  // data = { id, score };
  const headers = { authorization: token };
  const res = await axios.put(baseURL, data, { headers });
  // res.status = 200;
  // res.data = undefined;
  return res;
  // return { status: 200 };
};
