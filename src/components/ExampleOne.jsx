import React, { useState } from "react";

const ExampleOne = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      <input type="text" key={sw ? "x" : "y"} />
      <button onClick={() => setSw(!sw)}>Switch</button>
    </div>
  );
};

export default ExampleOne;
