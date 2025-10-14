import React from "react";

const ComponentOne = ({ count, handleClick, setCount }) => {
  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={clickHandler}>+1</button>
    </div>
  );
};

export default ComponentOne;
