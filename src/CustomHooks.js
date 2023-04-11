import { useState } from "react";
import useTitleCount from "./useTitleCount";

const CustomHooks = () => {
  const [count, setCount] = useState(0);
  useTitleCount(count);
  return (
    <div>
      <h2>CustomHooks Demo</h2>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default CustomHooks;
