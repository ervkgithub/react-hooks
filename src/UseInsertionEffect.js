import { useInsertionEffect, useState } from "react";

const UseInsertionEffect = () => {
  const [show, setShow] = useState(false);

  useInsertionEffect(() => {
    console.log("Component inserted!");
  }, [show]);

  return (
    <div>
      <h3>useInsertionEffect Hooks</h3>
      <div>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        {show && <div>Hello World!</div>}
      </div>
    </div>
  );
};

export default UseInsertionEffect;
