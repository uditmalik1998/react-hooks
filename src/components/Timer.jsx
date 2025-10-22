import React, { useRef, useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  console.log(timerRef);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, 1000);

    () => {
      clearInterval(timerRef.current);
    };
  },[]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
