import { useState, useTransition } from "react";

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const List_Size = 20000;
  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const list_arr = [];
      for (let i = 0; i < List_Size; i++) {
        list_arr.push(e.target.value);
      }
      setList(list_arr);
    });
  }
  return (
    <>
      <h3>useTransition Hooks Demo</h3>
      <input type="text" value={input} className="col-md-5" onChange={handleChange} />
      {isPending
        ? "Loading"
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      
    </>
  );
};

export default UseTransition;
