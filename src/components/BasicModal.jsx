import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';
import { basicTexts, tools } from '../services/basicInfo';


function BasicModal({ index }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setBasicPhases } = useContext(SWContext);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
    setBasicPhases(
      (prevPhases) => prevPhases.includes(index) ? prevPhases : [...prevPhases, index]
    );
  };

  return (
    <div className={ isOpen ? 'openInfo' : 'closedInfo' }>
      <h3>{ tools[index] }</h3>
      <p>{ basicTexts[index] }</p>
      <button onClick={ handleClick }>
        { isOpen ? 'Fechar' : 'Abrir' }
      </button>
    </div>
  );
}

export default BasicModal;
