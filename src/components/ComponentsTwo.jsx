import React from "react";

const ComponentTwo = ({ count, handleClick }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default ComponentTwo;
