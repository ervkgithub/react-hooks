
import { useState } from "react";
import List from "./List";

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <>
      <h3>useDeferredValue Hooks Demo</h3>
      <input type="text" className="col-md-5" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

export default UseDeferredValue;
