import React, { useActionState } from "react";

const increment = async (prevState, formData) => {
  console.log(formData);
  return prevState + 1;
};
const FetchData = () => {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      <h1>{state}</h1>
      <button formAction={formAction}>Increment</button>
    </form>
  );
};

export default FetchData;
