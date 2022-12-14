import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from '../services/functions';

function LeaderBoard() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getRows = async () => {
      const board = await getUsers();
      setRows(board);
    };
    getRows();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Nome</th>
          <th>Pontos</th>
        </tr>
      </thead>
      <tbody>
        { rows.map(({ name, score }, index) => (
          <tr key={ index }>
            <td>{ `${index + 1}°` }</td>
            <td>{ name }</td>
            <td>{ score }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeaderBoard;
