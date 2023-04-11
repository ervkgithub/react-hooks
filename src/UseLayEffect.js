import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayEffect = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("useEffect called");
    inputRef.current.value = "Richa";
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect called");
    console.log(inputRef.current.value);
  }, []);

  return (
    <>
      <h2> useLayoutEffect Demo</h2>
      <input defaultValue="Vijay" ref={inputRef} />
    </>
  );
};

export default UseLayEffect;
