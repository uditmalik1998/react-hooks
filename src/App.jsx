import "./App.css";
import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentsTwo";
import ExampleOne from "./components/ExampleOne";
import Profile from "./components/Profile";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* <ComponentOne
        count={count}
        handleClick={handleClick}
        setCount={setCount}
      />
      <ComponentTwo count={count} handleClick={handleClick} /> */}
      <ExampleOne />
      {/* <Profile/>
      <ShoppingCart/> */}
    </div>
  );
}

export default App;
