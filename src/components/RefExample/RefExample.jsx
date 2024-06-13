import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

export const RefExample = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // useEffect(() => {
  // Ефект виконується після монтування,
  // тому завжди буде посиланням на DOM-елемент
  //   console.log('useEffect: ', btnRef.current);
  // });

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log('handleClick: ', btnRef.current);
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        `Update value to trigger re-render: {value}`
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};
