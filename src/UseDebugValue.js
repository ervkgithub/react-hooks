import { useDebugValue, useState } from "react";

const UseDebugValue = () => {
  const [count, setCount] = useState(0);

  useDebugValue(count, )

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>useDebugValue Hooks demo</div>
      <h4 className="mt-3 mb-3">Count is: {count} </h4>
      <button className="col-md-2" onClick={addCount}>Add Count</button>
    </>
  );
};

export default UseDebugValue;
