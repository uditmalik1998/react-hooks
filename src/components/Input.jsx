import React, { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);

  console.log(inputRef);
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "Udit Malik";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>DO Something</button>
    </div>
  );
};

export default Input;
